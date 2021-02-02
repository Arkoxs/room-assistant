(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{371:function(e,t,s){e.exports=s.p+"assets/img/mijia-bind-key.02122d10.png"},406:function(e,t,s){"use strict";s.r(t);var r=s(46),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"xiaomi-mi-sensors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#xiaomi-mi-sensors"}},[e._v("#")]),e._v(" Xiaomi Mi Sensors")]),e._v(" "),r("p",[r("strong",[e._v("Integration Key:")]),e._v(" "),r("code",[e._v("xiaomiMi")])]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Using this together with "),r("a",{attrs:{href:"./bluetooth-low-energy"}},[e._v("Bluetooth Low Energy")]),e._v(" requires that the hciDeviceId settings of both integrations are the same value.")])]),e._v(" "),r("p",[e._v("The Xiaomi Mi integration scans for Bluetooth Low Engery (BLE) advertisements from a variety of Xiaomi sensors.\nSensor readings can then be published to MQTT using the "),r("a",{attrs:{href:"./home-assistant"}},[e._v("Home Assistant integration")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("This integration has all the same requirements as the "),r("a",{attrs:{href:"./bluetooth-low-energy"}},[e._v("Bluetooth Low Energy")]),e._v(" integration.")]),e._v(" "),r("h2",{attrs:{id:"supported-devices"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-devices"}},[e._v("#")]),e._v(" Supported devices")]),e._v(" "),r("p",[e._v("This integration has been tested with these devices:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("LYWSD02")]),e._v(" "),r("p",[e._v("(rectangular body, E-Ink with clock display. broadcasts temperature and humidity when it changes)")])]),e._v(" "),r("li",[r("p",[e._v("LYWSD02")]),e._v(" "),r("p",[e._v("(rectangular body, E-Ink, broadcasts temperature and humidity, about 20 readings per minute, no battery info)")])]),e._v(" "),r("li",[r("p",[e._v("LYWSDCGQ")]),e._v(" "),r("p",[e._v("(circular body, segment LCD, broadcasts temperature and humidity when it changes and battery level periodically)")])]),e._v(" "),r("li",[r("p",[e._v("LYWSD03MMC")]),e._v(" "),r("p",[e._v("(small square body, segment LCD, broadcasts temperature and humidity once in about 10 minutes and battery level once in an hour, advertisements are encrypted, therefore you need to set the key in your configuration, see for instructions the "),r("a",{attrs:{href:"#sensor-options"}},[e._v("bindKey")]),e._v(" option)")])]),e._v(" "),r("li",[r("p",[e._v("Mi Flora")]),e._v(" "),r("p",[e._v("(plant sensor, requires up-to-date firmware, tested with v3.2.2)")])])]),e._v(" "),r("h2",{attrs:{id:"settings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[e._v("#")]),e._v(" Settings")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Default")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("sensors")])]),e._v(" "),r("td",[r("a",{attrs:{href:"#sensor-options"}},[e._v("Sensor options")])]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("An array of sensor definitions.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("hciDeviceId")])]),e._v(" "),r("td",[e._v("Number")]),e._v(" "),r("td",[r("code",[e._v("0")])]),e._v(" "),r("td",[e._v("Bluetooth Device ID (e.g. "),r("code",[e._v("0")]),e._v(" to use "),r("code",[e._v("hci0")]),e._v(").")])])])]),e._v(" "),r("h3",{attrs:{id:"sensor-options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sensor-options"}},[e._v("#")]),e._v(" Sensor Options")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Default")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("name")])]),e._v(" "),r("td",[e._v("string")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("A human readable name for the sensor. Will be used in MQTT topics.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("address")])]),e._v(" "),r("td",[e._v("string")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("MAC address of the device ("),r("a",{attrs:{href:"#address-format"}},[e._v("Format")]),e._v(").")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("bindKey")])]),e._v(" "),r("td",[e._v("string")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("A decryption key for sensors which send "),r("a",{attrs:{href:"#encryption"}},[e._v("encrypted data")]),e._v(".")])])])]),e._v(" "),r("h3",{attrs:{id:"address-format"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#address-format"}},[e._v("#")]),e._v(" Address Format")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("address")]),e._v(" field is a lowercase MAC address without "),r("code",[e._v(":")]),e._v(".  This is the same format as a "),r("a",{attrs:{href:"./bluetooth-low-energy#determining-the-ids"}},[e._v("tag ID")]),e._v(" in the BLE integration. The BLE integration can also be used to log device IDs to the console.")]),e._v(" "),r("h2",{attrs:{id:"encryption"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#encryption"}},[e._v("#")]),e._v(" Encryption")]),e._v(" "),r("p",[e._v("Some Xiaomi sensors encrypted their data (e.g. LYWSD03MMC). To be able to read the data from this sensor one needs to get a hold of the encryption key. For ways to get this key please read this "),r("a",{attrs:{href:"https://github.com/custom-components/sensor.mitemp_bt/blob/master/faq.md#my-sensors-ble-advertisements-are-encrypted-how-can-i-get-the-key",target:"_blank",rel:"noopener noreferrer"}},[e._v("this FAQ entry"),r("OutboundLink")],1),e._v(" from the "),r("a",{attrs:{href:"https://github.com/custom-components/sensor.mitemp_bt/",target:"_blank",rel:"noopener noreferrer"}},[e._v("custom-components/sensor.mitemp_bt"),r("OutboundLink")],1),e._v(" repository.  Once found, it can be set with the "),r("a",{attrs:{href:"#sensor-options"}},[e._v("bindKey")]),e._v(" option.")]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Retrieving keys from the Xiaomi Mijia LYWSD03MMC")]),e._v(" "),r("ol",[r("li",[e._v("Keep the Xiaomi Mijia LYWSD03MMC sensor close to the mobile phone.")]),e._v(" "),r("li",[e._v("Make sure that the Bluetooth connection is enabled on the mobile phone.")]),e._v(" "),r("li",[e._v("Using the mobile phone's browser, navigate to "),r("a",{attrs:{href:"https://atc1441.github.io/TelinkFlasher.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://atc1441.github.io/TelinkFlasher.html"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Enlarge the mobile phone's screen for better readability.")]),e._v(" "),r("li",[e._v('Now, click the [Connect] button and wait until it shows "Connected." See the Log section at the bottom.')]),e._v(" "),r("li",[e._v('Once connected, click the [Do Activation] button and wait until the "Mi Bind Key" shows the information.')])]),e._v(" "),r("p",[r("img",{attrs:{src:s(371),alt:"TeLink Flasher interface for retrieving the bind key"}})])]),e._v(" "),r("h2",{attrs:{id:"see-also"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See also")]),e._v(" "),r("p",[e._v("There are many projects dedicated to these devices.  This integration has particularly benefited from these two:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/hannseman/homebridge-mi-hygrothermograph",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebridge plugin"),r("OutboundLink")],1),e._v(".  Much of the parser code came from this project.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/custom-components/sensor.mitemp_bt/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mitemp_bt"),r("OutboundLink")],1),e._v(".  One of the better documented projects with extensive device support.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);