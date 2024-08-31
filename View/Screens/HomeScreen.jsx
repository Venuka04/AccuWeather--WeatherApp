import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../constants";
import {
  CalendarDaysIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import { ScrollView } from "react-native";
import { debounce } from "lodash";
import { fetchLocations, fetchWeatherForecast } from "../api/weather";
import * as Progress from "react-native-progress";
import { storeData, getData } from "../utils/asyncStorage";
import { weatherImages } from "../Assets/index";

const defaultWeatherImage = require("../Assets/images/moderaterain.png"); // Fallback image

export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const handleLocation = (loc) => {
    setLocations([]);
    setShowSearch(false);
    setLoading(true);
    fetchWeatherForecast({
      cityName: loc.name,
      days: "7",
    })
      .then((data) => {
        setWeather(data);
        setLoading(false);
        storeData("city", loc.name);
      })
      .catch((error) => {
        console.error("Error fetching weather forecast:", error);
        setLoading(false);
      });
  };

  const handleSearch = (value) => {
    if (value.length > 2) {
      fetchLocations({ cityName: value })
        .then((data) => {
          setLocations(data); // Adjust based on your API response
        })
        .catch((error) => {
          console.error("Error fetching locations:", error);
        });
    } else {
      setLocations([]); // Clear locations if input is too short
    }
  };

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  const fetchMyWeatherData = async () => {
    let myCity = await getData("city");
    let cityName = "Colombo";
    if (myCity) cityName = myCity;

    fetchWeatherForecast({
      cityName,
      days: "7",
    })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather forecast:", error);
        setLoading(false);
      });
  };

  const handleTextDebounce = useCallback(
    debounce((value) => {
      handleSearch(value);
    }, 1200),
    []
  );

  const { current, location } = weather;

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../Assets/images/bg.png")}
        style={{ position: "absolute", height: "100%", width: "100%" }}
      />
      {loading ? (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Progress.CircleSnail thickness={10} size={140} color="#0bb3b2" />
        </View>
      ) : (
        <SafeAreaView style={{ flex: 1 }}>
          {/* Search Section */}
          <View
            style={{
              height: "7%",
              marginHorizontal: 16,
              marginTop: 10,
              position: "relative",
            }}
          >
            <TouchableOpacity
              onPress={() => setShowSearch(!showSearch)}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                backgroundColor: Colors.light,
                borderRadius: 50,
                padding: 10,
              }}
            >
              <MagnifyingGlassIcon size="25" color="white" />
            </TouchableOpacity>

            {showSearch && (
              <TextInput
                onChangeText={handleTextDebounce}
                placeholder="Search city"
                placeholderTextColor={Colors.gray}
                style={{
                  marginLeft: 40, // Space for the search icon
                  backgroundColor: Colors.white,
                  borderRadius: 50,
                  height: 40,
                  paddingHorizontal: 15,
                  color: Colors.black,
                }}
              />
            )}

            {locations.length > 0 && showSearch && (
              <View
                style={{
                  position: "absolute",
                  width: "100%",
                  backgroundColor: Colors.gray,
                  top: 50,
                  borderRadius: 20,
                }}
              >
                {locations.map((loc, index) => {
                  let showBorder = index + 1 !== locations.length;
                  let borderClass = showBorder
                    ? { borderBottomWidth: 2, borderBottomColor: Colors.gray }
                    : {};
                  return (
                    <TouchableOpacity
                      onPress={() => handleLocation(loc)}
                      key={index}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 10,
                        ...borderClass,
                      }}
                    >
                      <MapPinIcon size="20" color={Colors.gray} />
                      <Text style={{ color: Colors.black, marginLeft: 10 }}>
                        {loc?.name}, {loc?.country}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
          {/* Forecast Section */}
          <View
            style={{
              marginHorizontal: 16,
              flex: 1,
              justifyContent: "space-around",
              marginBottom: 8,
            }}
          >
            {/* Location */}
            <Text
              style={{
                color: Colors.white,
                textAlign: "center",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              {location?.name}
              <Text
                style={{ fontSize: 18, fontWeight: "600", color: Colors.gray }}
              >
                {" " + location?.country}
              </Text>
            </Text>
            {/* Weather Image */}
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={
                  weatherImages[current?.condition.text] || defaultWeatherImage
                }
                style={{ width: 130, height: 130 }}
              />
            </View>
            {/* Temperature */}
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 60,
                  fontWeight: "bold",
                }}
              >
                {current?.temp_c}&#176;
              </Text>
              <Text
                style={{ color: Colors.white, fontSize: 20, letterSpacing: 2 }}
              >
                {current?.condition?.text}
              </Text>
            </View>
            {/* Other Stats */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 16,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../Assets/icons/wind.png")}
                  style={{ width: 24, height: 24 }}
                />
                <Text
                  style={{
                    color: Colors.white,
                    fontWeight: "600",
                    marginLeft: 5,
                  }}
                >
                  {current?.wind_kph}km/h
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../Assets/icons/drop.png")}
                  style={{ width: 24, height: 24 }}
                />
                <Text
                  style={{
                    color: Colors.white,
                    fontWeight: "600",
                    marginLeft: 5,
                  }}
                >
                  {current?.humidity}%
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../Assets/icons/sun.png")}
                  style={{ width: 24, height: 24 }}
                />
                <Text
                  style={{
                    color: Colors.white,
                    fontWeight: "600",
                    marginLeft: 5,
                  }}
                >
                  {weather?.forecast?.forecastday[0]?.astro?.sunrise}
                </Text>
              </View>
            </View>
          </View>
          {/* Forecast for Next Days */}
          <View style={{ marginBottom: 8 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              <CalendarDaysIcon size="22" color="white" />
              <Text style={{ color: Colors.white, fontSize: 16 }}>
                Daily Forecast
              </Text>
            </View>
            <ScrollView
              horizontal
              contentContainerStyle={{ paddingHorizontal: 15 }}
              showsHorizontalScrollIndicator={false}
            >
              {weather?.forecast?.forecastday?.map((item, index) => {
                let date = new Date(item.date);
                let options = { weekday: "long" };
                let dayname = date.toLocaleDateString("en-us", options);
                let dayName = dayname.split(",")[0];
                return (
                  <View
                    key={index}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: 100,
                      borderRadius: 20,
                      paddingVertical: 10,
                      backgroundColor: Colors.white,
                      marginRight: 10,
                    }}
                  >
                    <Image
                      source={
                        weatherImages[item?.day?.condition?.text] ||
                        defaultWeatherImage
                      }
                      style={{ width: 44, height: 44 }}
                    />
                    <Text style={{ color: Colors.black }}>{dayName}</Text>
                    <Text
                      style={{
                        color: Colors.black,
                        fontSize: 18,
                        fontWeight: "600",
                      }}
                    >
                      {item?.day?.avgtemp_c}&#176;
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </SafeAreaView>
      )}
    </View>
  );
}
