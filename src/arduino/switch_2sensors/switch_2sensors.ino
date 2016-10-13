int errorThreshold = 2;

int result_1 = 1021;  // (with 340 ohm)
int result_2 = 936;  // (with 12000 ohm)
int result_1_2 = 933;  // (with 12000 ohm + 340 ohm)

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(A0);
  if (abs(sensorValue - result_1) < errorThreshold) {
    Serial.println("{\"s1\": \"CLOSED\", \"s2\": \"OPEN\"}");
  } else if (abs(sensorValue - result_2) < errorThreshold) {
    Serial.println("{\"s1\": \"OPEN\", \"s2\": \"CLOSED\"}");
  } else if (abs(sensorValue - result_1_2) < errorThreshold) {
    Serial.println("{\"s1\": \"CLOSED\", \"s2\": \"CLOSED\"}");
  } else {
    Serial.println("{\"s1\": \"OPEN\", \"s2\": \"OPEN\"}");
  }
  delay(5000);        // delay in between reads for stability
}
