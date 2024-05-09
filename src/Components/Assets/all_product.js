import p1_img from "./voxelbookmark_bulbasaur.png";
import p2_img from "./voxelbookmark_charmander.png";
import p3_img from "./voxelbookmark_darthvader.png";
import p4_img from "./voxelbookmark_spiderman.png";
import p5_img from "./voxelbookmark_r2d2.png";
import p6_img from "./voxelbookmark_redbottom.png";
import p7_img from "./voxelbookmark_jacksparrow.png";
import p8_img from "./voxelbookmark_hulk.png";
import p9_img from "./voxelbookmark_powerpuffgirls.png";
import p10_img from "./voxelbookmark_chewbacca.png";
import p11_img from "./voxelbookmark_mario.png";
import p12_img from "./voxelbookmark_spaghetti.png";
import p13_img from "./voxelbookmark_salad.png";
import p14_img from "./voxelbookmark_chanel.png";
import p15_img from "./voxelbookmark_delorean.png";
import p16_img from "./voxelbookmark_starbucks.png";
import p17_img from "./voxelbookmark_macmakeup.png";
import p18_img from "./voxelbookmark_harrypotter.png";
import p19_img from "./voxelbookmark_wonderwoman.png";
import p20_img from "./voxelbookmark_mysterymachine.png";
import p21_img from "./voxelbookmark_venom.png";
import p22_img from "./voxelbookmark_yoda.png";
import p23_img from "./voxelbookmark_smores.png";
import p24_img from "./voxelbookmark_trumpet.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Bulbasaur Engraved Bookmark",
    category: "popular",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Charmander Engraved Bookmark",
    category: "popular",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Darth Vader Engraved Bookmark",
    category: "popular",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Spiderman Engraved Bookmark",
    category: "popular",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "R2D2 Engraved Bookmark",
    category: "women",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Red Bottom High Heel Engraved Bookmark",
    category: "women",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Jack Sparrow Engraved Bookmark",
    category: "women",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Incredible Hulk Engraved Bookmark",
    category: "women",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "Powerpuff Girls Engraved Bookmark",
    category: "women",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Chewbacca Engraved Bookmark",
    category: "women",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Mario Engraved Bookmark",
    category: "women",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "Spaghetti Engraved Bookmark",
    category: "women",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "Salad Engraved Bookamark",
    category: "men",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Chanel Engraved Bookmark",
    category: "men",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Back to the Future Engraved Bookmark",
    category: "men",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Starbucks Engraved Bookmark",
    category: "men",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "MAC Makeup Kit Engraved Bookmark",
    category: "men",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Harry Potter Engraved Bookmark",
    category: "men",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "Wonder Woman Engraved Bookmark",
    category: "men",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Mystery Machine Engraved Bookmark",
    category: "men",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "Venom Engraved Bookmark",
    category: "men",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "Yoda Engraved Bookmark",
    category: "men",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "Smores Campfire Engraved Bookmark",
    category: "men",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "Trumpet Engraved Bookmark",
    category: "men",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 26,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 27,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p28_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 29,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 30,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 31,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p31_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 32,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p32_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 33,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p35_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 36,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
  },
];

export default all_product;
