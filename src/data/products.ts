import nillayamatt from "../assets/asian-paint-nilaya-arc-matt-wall-paint-Photoroom.png";
import pearlescent from "../assets/Nilaya-Arc-Pearlescent-new-Photoroom.png";
import royalAspira from "../assets/royale-aspira-emulsion-paint-Photoroom.png";
import royalGlitz from "../assets/royale-glitz-reserv-new-packshot-Photoroom.png";
import duralife from "../assets/ultima-protek-duralife.png";
import apexultimaprotek from "../assets/apex-ultima-water-proof-Photoroom.png";
import silkGlamourMatt from "../assets/silk-glamour-matt.png";
import silkGlamourHighSheen from "../assets/silk-glamour-high-sheen.png";
import silkGalmourSoftSheen from "../assets/Big-Silk_Glamor_Soft_Sheen_0-Photoroom.png";
import weatherShieldPowerFlex from "../assets/800-dulux-weathershield-powerflexx-brilliant-white-4-lt-16456778694485-Photoroom.png";
import weatherShieldMax from "../assets/dulux-weathershield-tile-paint-Photoroom.png";
import weatherSheildRainproof from "../assets/weathershield-rainproof.png";
import eterna from "../assets/eterna.png";
import diamonGlo from "../assets/velvet-pearl-glo.png";
import pearlGlo from "../assets/dulux-velvet-touch-pearl-glo-interior-paint-Photoroom.png";
import excelEverlast from "../assets/excel-everlast.png";
import kashmirHighSheen from "../assets/Nerolac-Impressions-Kashmir-High-Sheen_Cheatshot_R1-Photoroom.png";
import { Brand, Application, SizeOption, ColorOption } from "@/context/CartContext";

export type Product = {
  id: string;
  name: string;
  brand: Brand;
  application: Application;
  pricePerL: number;
  features: string[];
  sizes: SizeOption[];
  colors: ColorOption[];
  image: string;
};

export const colorPalette: ColorOption[] = [
  { name: "Baby Blue", hex: "#9FD3F6" },
  { name: "Aerial View", hex: "#7EC8E3" },
  { name: "Crystal Glimmer", hex: "#CFE7F5" },
  { name: "Blush", hex: "#E7B2C1" },
  { name: "Little Bow Pink", hex: "#F4C1D8" },
  { name: "Restoration Rose", hex: "#D48790" },
  { name: "Forest Green", hex: "#2E7D32" },
  { name: "Warm Beige", hex: "#DCC7A1" },
  { name: "Slate Grey", hex: "#7B8A8B" },
  { name: "Royal Blue", hex: "#3B82F6" },
  { name: "Sunset Peach", hex: "#F6B094" },
  { name: "Seafoam", hex: "#9FE3C0" },
  { name: "Lavender Touch", hex: "#CDB4DB" },
  { name: "Opal", hex: "#9AC4B8" },
  { name: "Honey Moon", hex: "#F3D39C" },
  { name: "Golden Tan", hex: "#D2A679" },
  { name: "Barley Beige", hex: "#E5D8C7" },
  { name: "Purple Wish", hex: "#9B5DE5" },
];

const sizes: SizeOption[] = ["1L", "4L", "10L", "20L"];

export const products: Product[] = [
  // Asian Interior
  {
    id: "asian-nilaya-arc-matt",
    name: "Nilaya Arc Matt",
    brand: "Asian Paints",
    application: "Interior",
    pricePerL: 700,
    features: ["Lime-Based Finish", "Artisanal Matt Finish", "10 Years Warranty"],
    sizes,
    colors: colorPalette,
    image: nillayamatt,
  },
  {
    id: "asian-nilaya-arc-pearlescent",
    name: "Nilaya Arc Pearlescent",
    brand: "Asian Paints",
    application: "Interior",
    pricePerL: 740,
    features: ["Lime-Based Finish", "Alluring Pearl Finish", "10 Years Warranty"],
    sizes,
    colors: colorPalette,
    image: pearlescent,
  },
  {
    id: "asian-royale-aspira",
    name: "Royale Aspira",
    brand: "Asian Paints",
    application: "Interior",
    pricePerL: 720,
    features: ["Water Beading Technology", "Luxury with Teflon™", "8 Years Warranty"],
    sizes,
    colors: colorPalette,
    image: royalAspira,
  },
  {
    id: "asian-royale-glitz",
    name: "Royale Glitz",
    brand: "Asian Paints",
    application: "Interior",
    pricePerL: 710,
    features: ["Perfect Crème Finish in Ultra Sheen", "Teflon Surface Protector", "8 Years Warranty"],
    sizes,
    colors: colorPalette,
    image: royalGlitz,
  },
  // Asian Exterior
  {
    id: "asian-apex-ultima-protek-duralife",
    name: "Apex Ultima Protek Duralife",
    brand: "Asian Paints",
    application: "Exterior",
    pricePerL: 680,
    features: ["WALLS of S.T.E.E.L", "15 Years Warranty*", "Advanced PUD Formula"],
    sizes,
    colors: colorPalette,
    image: duralife,
  },
  {
    id: "asian-apex-ultima-protek",
    name: "Apex Ultima Protek",
    brand: "Asian Paints",
    application: "Exterior",
    pricePerL: 650,
    features: ["Home Lamination powered by Graphene", "12 Years Warranty*", "Elastomeric Armour"],
    sizes,
    colors: colorPalette,
    image: apexultimaprotek,
  },
  // Berger Interior
  {
    id: "berger-silk-glamor-matt",
    name: "Silk Glamor Matt",
    brand: "Berger",
    application: "Interior",
    pricePerL: 640,
    features: ["Rich Matt Finish", "Superior Cleanability", "Green Pro Certified"],
    sizes,
    colors: colorPalette,
    image: silkGlamourMatt,
  },
  {
    id: "berger-silk-glamor-high-sheen",
    name: "Silk Glamor High Sheen",
    brand: "Berger",
    application: "Interior",
    pricePerL: 660,
    features: ["Ultra Smooth Finish", "Elastomeric Film", "Low Smell"],
    sizes,
    colors: colorPalette,
    image: silkGlamourHighSheen,
  },
  {
    id: "berger-silk-glamor-soft-sheen",
    name: "Silk Glamor Soft Sheen",
    brand: "Berger",
    application: "Interior",
    pricePerL: 650,
    features: ["Rich sheen finish", "Superior Cleanability", "Elastomeric Film"],
    sizes,
    colors: colorPalette,
    image: silkGalmourSoftSheen,
  },
  // Dulux Exterior
  {
    id: "dulux-weathershield-powerflexx",
    name: "Weathershield Powerflexx",
    brand: "Dulux",
    application: "Exterior",
    pricePerL: 700,
    features: ["High Sheen", "Triple Defence Technology", "PU Modified Acrylic"],
    sizes,
    colors: colorPalette,
    image: weatherShieldPowerFlex,
  },
  {
    id: "dulux-weathershield-max",
    name: "Weathershield Max",
    brand: "Dulux",
    application: "Exterior",
    pricePerL: 690,
    features: ["PU Technology", "Elastomeric Film", "Sun Reflect"],
    sizes,
    colors: colorPalette,
    image: weatherShieldMax,
  },
  {
    id: "dulux-weathershield-protect-rainproof",
    name: "Weathershield Protect Rainproof",
    brand: "Dulux",
    application: "Exterior",
    pricePerL: 660,
    features: ["Soft Sheen", "High durability", "Advanced Rainshield"],
    sizes,
    colors: colorPalette,
    image: weatherSheildRainproof,
  },
  // Dulux Interior
  {
    id: "dulux-velvet-touch-eterna",
    name: "Velvet Touch Eterna",
    brand: "Dulux",
    application: "Interior",
    pricePerL: 720,
    features: ["Mid Sheen", "High Washability", "Refreshing aroma"],
    sizes,
    colors: colorPalette,
    image: eterna,
  },
  {
    id: "dulux-velvet-touch-diamond-glo",
    name: "Velvet Touch Diamond Glo",
    brand: "Dulux",
    application: "Interior",
    pricePerL: 740,
    features: ["High sheen", "Best in class stain repellence", "Durability"],
    sizes,
    colors: colorPalette,
    image: diamonGlo,
  },
  {
    id: "dulux-velvet-touch-pearl-glo",
    name: "Velvet Touch Pearl Glo",
    brand: "Dulux",
    application: "Interior",
    pricePerL: 710,
    features: ["Mid sheen", "Smoothness", "Pearl like finish"],
    sizes,
    colors: colorPalette,
    image: pearlGlo,
  },
  // Nerolac
  {
    id: "nerolac-excel-everlast-12",
    name: "Excel Everlast 12",
    brand: "Nerolac",
    application: "Exterior",
    pricePerL: 670,
    features: ["14 Years Warranty", "Anti Algal", "Anti Carbonation"],
    sizes,
    colors: colorPalette,
    image: excelEverlast,
  },
  {
    id: "nerolac-impression-kashmir-high-sheen",
    name: "Impression Kashmir High Sheen",
    brand: "Nerolac",
    application: "Interior",
    pricePerL: 680,
    features: ["Luxury Finish", "Anti-fungal", "Kills 99% Germs"],
    sizes,
    colors: colorPalette,
    image: kashmirHighSheen,
  },
];
