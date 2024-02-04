import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
const { Text } = require("react-native");

const CalendarScreen = ({ navigation }) => {
  const [selected, setSelected] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);

  const schedule = [
    {
      date: "2024-05-20",
      dayOfWeek: "Monday",
      classes: [
        {
          courseCode: "CISC365",
          time: "8:00 AM - 10:00 AM",
          location: "A. Building at Queen's University",
        },
        {
          courseCode: "CISC332",
          time: "11:00 AM - 1:00 PM",
          location: "A. Building at Queen's University",
        },
      ],
    },
    {
      date: "2024-05-21",
      dayOfWeek: "Tuesday",
      classes: [
        {
          courseCode: "CISC335",
          time: "9:30 AM - 11:30 AM",
          location: "A. Building at Queen's University",
        },
        {
          courseCode: "STAT263",
          time: "2:00 PM - 4:00 PM",
          location: "A. Building at Queen's University",
        },
      ],
    },
    {
      date: "2024-05-22",
      dayOfWeek: "Wednesday",
      classes: [
        {
          courseCode: "CISC365",
          time: "10:30 AM - 12:30 PM",
          location: "A. Building at Queen's University",
        },
        {
          courseCode: "CISC332",
          time: "2:00 PM - 4:00 PM",
          location: "A. Building at Queen's University",
        },
      ],
    },
    {
      date: "2024-05-23",
      dayOfWeek: "Thursday",
      classes: [
        {
          courseCode: "CISC335",
          time: "1:30 PM - 3:30 PM",
          location: "A. Building at Queen's University",
        },
        {
          courseCode: "STAT263",
          time: "4:00 PM - 6:00 PM",
          location: "A. Building at Queen's University",
        },
      ],
    },
    {
      date: "2024-05-24",
      dayOfWeek: "Friday",
      classes: [
        {
          courseCode: "CISC365",
          time: "8:30 AM - 10:30 AM",
          location: "A. Building at Queen's University",
        },
        {
          courseCode: "CISC332",
          time: "1:00 PM - 3:00 PM",
          location: "A. Building at Queen's University",
        },
      ],
    },
  ];

  const onDayPress = (day) => {
    setSelected(day.dateString);

    // Filter the schedule based on the selected date
    const selectedDayEntry = schedule.find(
      (entry) => entry.date === day.dateString
    );
    const selectedDayClasses = selectedDayEntry ? selectedDayEntry.classes : [];
    setSelectedClasses(selectedDayClasses);
  };

  return (
    <View style={[styles.container]}>
      <Text
        style={{
          paddingTop: 40,
          fontSize: 24,
          // fontFamily: "BeVietnamPro_600SemiBold",
        }}
      >
        Calendar
      </Text>
      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendar}
          onDayPress={onDayPress}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "purple",
            },
          }}
        />
      </View>
      <View style={styles.classesContainer}>
        {selectedClasses.map((classInfo, index) => (
          <View key={index} style={styles.classInfo}>
            <View style={styles.class}>
              <View style={styles.dateTime}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "AzeretMono_400Regular",
                  }}
                >
                  {selected}
                </Text>
                <Text>{classInfo.time}</Text>
              </View>
              <Text>{classInfo.courseCode}</Text>
              <Text>{classInfo.time}</Text>
              <Text>{classInfo.location}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
  },
  calendar: {
    borderRadius: 20,
    overflow: "hidden",
  },
  calendarContainer: {
    padding: 10,
    marginTop: 40,
  },
  classInfo: {
    width: "auto",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginTop: 15,
    marginHorizontal:10
  },
  class: {},
  dateTime: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default CalendarScreen;
