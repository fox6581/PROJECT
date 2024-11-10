<template>
    <div class="container" >
      <Card
        :imageSrc="group1"
        title="Popular Products"
        description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        
        />
      
      <Card

        backgroundColor="#F9F9F9"
        :imageSrc="group2"
        title="New Arrival"
        description="The latest generation of iPhone with advanced features and stunning display."
      />
      <Card
      backgroundColor="#EAEAEA;" 

        :imageSrc="group3"
        title="Best Seller"
        description="Experience the cutting-edge technology with our best-selling product."
      />
      <Card
      backgroundColor="#2C2C2C" 
      titleColor="#ffffff"

        :imageSrc="group4"
        title="Limited Edition"
        description="Get your hands on our exclusive limited edition before it's gone."
      />
    </div>
  </template>
  
  <script>
  import Card from './OneCard.vue';
  
  import group1 from '@/assets/Group 1.png';
import group2 from '@/assets/image 64.png';
import group3 from '@/assets/image 41.png';
import group4 from '@/assets/Macbook 1.png';
 


export default {
  components: {
    Card,
  },
  data() {
    return {
      group1,
      group2,
      group3,
      group4,
    };
  },
};
  </script>
  
  <style scoped>
  .container {
    display: flex;
    align-items: flex-end;
}
  
@media(width<780px){
  .container{
  
    flex-direction: column;
}
}
  </style>
  