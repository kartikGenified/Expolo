//Thanks to Karik for this Setup (The Half Blood Prince)

//clint ID's
export const clientName = "gautam-garments";
export const clientID = 30;

export const baseUrl = "http://saas-api-dev.genefied.in/" // "http://saas-api-dev.genefied.in/"  "http://sales-saas-api.genefied.in/"" "https://saas.genefied.in/""

//icons and images
export const appIcon = require("../../assets/images/logoExpolo.png");
export const splash = require("../../assets/gif/SplashExpolo.gif");

export const descriptionImages = [
  require("../../assets/images/retailerLoyalty.png"),
  // require("../../assets/images/Step2.png"),
  // require("../../assets/images/Step3.png"),
  // require("../../assets/images/Step4.png"),
  require("../../assets/images/surprisingGift.png")
];

//Change Loader Manually By Simply Replacing images

//Registration
export const RegistrationMessage = `Thank you for joining ${clientName} Loyalty program`;
export const permissionMessage = `To scan the QR code, the ${clientName} app must have access permissions. Please grant access to the camera`
export const eKyc = true;  // send true if you want to call aadhar gst and pan api else false

export const cameraPermissionMessage = "To capture QR codes, expolo app requires camera access"
//Dashboard
export const needCaimpaign = __DEV__ ? true : true;

export const scannerType = "qr"; //"qr for qr", "bar for bar

// choose from ["points", "scanned", "redeemed", "cashback","coupon", "warranty", "wheel","previous transaction","wheel","shared"]
export const neededHistory = [
  "points",

  "redeemed",





];

export const showEditProfile = true;

export const needWalkedThrough = true

export const needRandomRedeemPoint = true

export const redeemptionItems = ["gift" ]; // choose from -->  ["gift", "cashback","coupon"]
