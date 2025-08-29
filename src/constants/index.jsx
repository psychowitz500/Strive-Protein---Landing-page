import { Wheat } from "lucide-react";
import { Award } from "lucide-react";
import { RefreshCw } from "lucide-react";
import { Sparkles } from "lucide-react";
import { PlugZap } from "lucide-react";
import { Leaf } from "lucide-react";


import wheyImg from "../assets/whey.png";
import plantImg from "../assets/plant.png";
import massgainerImg from "../assets/massgainer.png";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Benefits", href: "#" },
  { label: "Nutrition", href: "#" },
  { label: "Products", href: "#" },
  { label: "Reviews", href: "#" },
];

export const testimonials = [
  {
    user: "Rahul Mehta",
    company: "Mumbai, Maharashtra",
    image: user1,
    text: "Strive Whey Protein has completely changed my post-workout routine. The taste is amazing and recovery feels much faster. Definitely the best protein I've tried!",
  },
  {
    user: "Ananya Sharma",
    company: "Delhi, India",
    image: user2,
    text: "I switched to Plant Protein and I love it! It’s light, easy to digest, and perfect for me as a vegetarian. Highly recommend for anyone looking for a clean protein source.",
  },
  {
    user: "Vikram Singh",
    company: "Bangalore, Karnataka",
    image: user3,
    text: "The Mass Gainer helped me put on healthy weight without feeling bloated. Great mixability and taste. Perfect for serious muscle building.",
  },
  {
    user: "Priya Iyer",
    company: "Chennai, Tamil Nadu",
    image: user4,
    text: "Being into yoga and fitness, I needed something natural. The Plant Protein gives me steady energy and keeps me strong through my day. Love it!",
  },
  {
    user: "Arjun Patel",
    company: "Ahmedabad, Gujarat",
    image: user5,
    text: "I’ve been using Strive Whey for 6 months now, and the results are visible. Lean muscle growth and faster recovery. Totally worth it!",
  },
  {
    user: "Simran Kaur",
    company: "Amritsar, Punjab",
    image: user6,
    text: "Mass Gainer has been a game changer for me. Helped me achieve my bulking goals faster while still tasting delicious. Highly satisfied!",
  },
];

export const features = [
  {
    icon: <Wheat />,
    text: "High-Quality Ingredients",
    description:
      "No fillers—just pure whey and essential nutrients for clean, efficient fuel.",
  },
  {
    icon: <RefreshCw />,
    text: "Faster Recovery",
    description:
      "Scientifically formulated to support muscle repair after intense workouts.",
  },
  {
    icon: <Sparkles />,
    text: "Great Taste",
    description:
      "Delicious flavors you’ll actually look forward to—no chalky aftertaste..",
  },
  {
    icon: <Award />,
    text: "Trusted by Athletes",
    description:
      "Our protein supplements are trusted by professional athletes and fitness enthusiasts alike.",
  },
  {
    icon: <PlugZap />,
    text: "Easy to Mix",
    description:
      "Addresses a common user pain point with protein powders (clumping), which is a practical benefit.",
  },
  {
    icon: <Leaf />,
    text: "Sustainably Sourced",
    description:
      "Our protein is sourced from sustainable farms, ensuring high quality and minimal environmental impact.",
  },
];

export const checklistItems = [
  {
    title: "High-Quality Protein",
    description:
      "Supports muscle growth and faster recovery after workouts.",
  },
  {
    title: "Rich in Essential Amino Acids",
    description:
      "Provides complete nutrition to build strength and endurance naturally.",
  },
  {
    title: "Added Vitamins & Minerals",
    description:
      "Boosts immunity, energy levels, and overall wellness.",
  },
  {
    title: "Low Fat & Easy to Digest",
    description:
      "Keeps you light, energetic, and ready to perform every day.",
  },
];



export const pricingOptions = [
  {
    title: "Whey Protein",
    price: "₹2499",
    image: wheyImg,
    features: [
      "24g protein per scoop",
      "Fast absorption",
      "Supports muscle recovery",
      "Available in Chocolate & Vanilla"
    ],
  },
  {
    title: "Plant Protein",
    price: "₹2199",
    image: plantImg,
    features: [
      "22g protein per scoop (pea & brown rice blend)",
      "100% Vegan & Dairy-Free",
      "Easily digestible",
      "Rich in BCAAs"
    ],
  },
  {
    title: "Mass Gainer",
    price: "₹2999",
    image: massgainerImg,
    features: [
      "50g protein + carbs blend",
      "Supports weight & muscle gain",
      "Added vitamins & minerals",
      "Great taste, easy mix"
    ],
  },
];


export const resourcesLinks = [
  { href: "#", text: "Protein Guide" },
  { href: "#", text: "Nutrition Tips" },
  { href: "#", text: "Workout Plans" },
  { href: "#", text: "Diet Recipes" },
  { href: "#", text: "FAQs" },
];

export const platformLinks = [
  { href: "#", text: "Whey Protein" },
  { href: "#", text: "Plant Protein" },
  { href: "#", text: "Mass Gainers" },
  { href: "#", text: "Bundles & Combos" },
  { href: "#", text: "Special Offers" },
];

export const communityLinks = [
  { href: "#", text: "Customer Stories" },
  { href: "#", text: "Fitness Challenges" },
  { href: "#", text: "Events & Webinars" },
  { href: "#", text: "Ambassador Program" },
  { href: "#", text: "Careers" },
];
