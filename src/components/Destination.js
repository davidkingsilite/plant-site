import React from "react";
import DestinationData from "./DestinationData";
import "./DestStyles.css";

const Destination = () => {
  return(
    <div className="destination">
      <h1> Popular Destinations </h1>
      <p> Tours give you the Opporttunity to see a lot, within a time frame</p>

      <DestinationData
      className="first-des"
      heading ="Taal volcano, Batangas"
      text= "One of the most iconic views in Luzon, Mt. Taal boast a volcano inside a lake inside an island. If you fancy a closer look, the hike up the crater is a mere 45minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the perculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip. and then unwind with some bulalo before heading back home."
      img1={"https://images.unsplash.com/photo-1671772555442-cc9813ce8c76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"}
      img2={"https://images.unsplash.com/photo-1583685133115-90748ccbe274?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
      />

      <DestinationData
      className ="first-des-reverse"
      heading ="Mt.Dagul, Batangas"
      text= "If you're looking for a hike that's a little more challenging but still good dor a beginner mountaineer,check out Mt.Daguldul in San Juan, Batanga. You'll start your hike from the beach and pass through tropical forest, diffrent rock formation and small streams. There's a small store halfway up to the trail where you can take a break and drink buko juice and though the summit itself may not have the best view, the breeze is fantastic. Once you've made it back down, head straight to the beach for a refreshing, well deserved swim."
      img1={"https://images.unsplash.com/photo-1651637490492-6793e0cbb73f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"}
      img2={"https://images.unsplash.com/photo-1654856487863-cec356dbc446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
      />
    </div>
  )
}
export default Destination;