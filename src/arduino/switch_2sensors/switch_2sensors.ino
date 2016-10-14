int errorThreshold = 2;
int prevSensorValue = 0;

int result_1 = 936;  // (with 340 ohm)
int result_2 = 1021;  // (with 12000 ohm)
int result_1_2 = 1023;  // (with 12000 ohm + 340 ohm)

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  String result_sensor_1;
  // read the input on analog pin 0:
  int sensorValue = analogRead(A0);
  //if (abs(sensorValue - prevSensorValue) > errorThreshold) {
    if (abs(sensorValue - result_1) < errorThreshold) {
      result_sensor_1 = "{\"p1\": \"CLOSED\", \"p2\": \"OPEN\"}";
    } else if (abs(sensorValue - result_2) < errorThreshold) {
      result_sensor_1 = "{\"p1\": \"OPEN\", \"p2\": \"CLOSED\"}";
    } else if (abs(sensorValue - result_1_2) < errorThreshold) {
      result_sensor_1 = "{\"p1\": \"CLOSED\", \"p2\": \"CLOSED\"}";
    } else {
      result_sensor_1 = "{\"p1\": \"OPEN\", \"p2\": \"OPEN\"}";
    }
    Serial.println("{\"s1\":" + result_sensor_1 + "}");
  //}
  prevSensorValue = sensorValue;
  delay(1000);        // delay in between reads for stability
}
