import React from "react";
import TripData from "./TripData";
import "./TripStyles.css";

const Trip = () => {
  return(
    <div className="trip">
      <h1> Recent Trips</h1>
        <p> You can discover unique destinations using Google Maps.</p>
        <div className="tripcard"> 
          <TripData 
            image={"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80"}
            heading="Trip in Indonesia"
            text="Indonesia, officially the Republic of Indonesia, is a country in southeast Asia and Oceania between the Indian and Pacific Oceans. It's consist over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
          />
          <TripData 
            image={"https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"}
            heading="Trip in France"
            text="France, in Western Europe, encompasses medival cities,alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the tiffel tower."
          />
          <TripData 
            image={"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"}
            heading="Trip in Malaysia"
            text="Malaysia, country of Southeast Asia, lying just north of the Equator, that is composed of two noncontiguous regions: Peninsular Malaysia (Semenanjung Malaysia), also called West Malaysia (Malaysia Barat),
                 which is on the Malay Peninsula, and East Malaysia (Malaysia Timur), which is on the island of Borneo."
          />
        </div>
    </div>
  );
}

export default Trip;
