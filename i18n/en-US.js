let enUS = {
  "pageTitle"    : "Nintendo Switch Payload Loader",
  "pageSubtitle" : "Fusee Launcher ported to JavaScript using WebUSB.",
  "dangerDanger"   :"This is moderately tested. Although no issues have been discovered, I'm not responsible if anything goes wrong!",
  "warningWindows" :"This does NOT work on Windows due to a limitation in the Chrome implementation of WebUSB (and probably other reasons!)",
  "warningBrowser" :"This does NOT currently work on any browser but Chrome, because they don't implement WebUSB.",
  "warningLinux"   :"On Linux, you might get an 'Access Denied' or 'No Compatible Device' error on the Connect dialog! If you do, you can try creating a file at <code>/etc/udev/rules.d/50-switch.rules</code>With the following contents:<br><code>SUBSYSTEM==\"usb\", ATTR{idVendor}==\"0955\", MODE=\"0664\", GROUP=\"plugdev\"</code>",
  "warningTested"  :"This has been tested and appears to work on Linux, OSX, Android (unrooted) and Chromebooks. Your mileage may vary.",
  "labelInstructions" :"Instructions:",
  "liRCM"          :"Put the Switch in RCM, and connect it to your device.",
  "liSelect"       :"Select either the example payload, or upload one.",
  "liPress"        :"Press 'Deliver Payload!'",
  "liAPX"          :"On the consent screen that appears, select 'APX' and hit 'Connect'.",
  "liLaunch"       :"If all goes well, the payload will launch!",
  "labelAddPayload":"If you would like to add another payload to this project, use <a href='https://gist.github.com/lorek123/561e4f7b5f61618029cc70672e3d7308'>this converter</a> and do PR",
  "h1SetupDelivery" :"Setup Payload Delivery",
  "h4SelectPayload" :"Select Payload:",
  "optionCTCaerHekate" :"CTCaer's Hekate Mod v4.2 (All Firmwares)",
  "optionFusee"     :"(Re)Switched test payload (fusee)",
  "optionSXOS"      :"SX OS (All Firmwares)",
  "optionReiNX"     :"ReiNX (With SigPatches)",
  "optionUpload"    :"Upload Payload",
  "h3Log"           :"Log:",
  "h4GetByteArray"  :"Get payload byte array (don't sploit)",
  "goButton"        :"Deliver Payload!",
  "clearlogsbutton" :"Clear Logs",
  "disclaimer1" :'Source can be found on <a href="https://github.com/ElijahZAwesome/web-cfw-loader/">GitHub</a> (or by hitting view source, there is no backend!).',
  "disclaimer2" :'Ported from <a href="https://github.com/reswitched/fusee-launcher">fusee-launcher</a>.',
  "disclaimer3" :'Thanks to ktemkin and ReSwitched, as well as <br><a href="https://atlas44.s3-us-west-2.amazonaws.com/web-fusee-launcher/index.html">Atlas44 and his website</a> as a beginning point for this one.',
  "disclaimer4" :'Lastly, thanks to <a href="https://github.com/falquinho">falquinho</a> for the new bootstrap layout and portuguese translation, <a href="https://github.com/Filo97">Filo97</a> for the italian translation, <a href="https://github.com/tumGER">tumGER</a> for his german translation, and <a href="https://github.com/lordfriky">Lord_Friky</a> for the spanish translation.'
}
