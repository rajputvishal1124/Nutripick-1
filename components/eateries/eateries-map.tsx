"use client";

import { useEffect, useRef } from "react";

export default function EateriesMap() {
  // const mapRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   // In a real application, this would initialize a map library like Google Maps or Mapbox
  //   if (mapRef.current) {
  //     // Mock map initialization
  //     const mockMap = document.createElement("div");
  //     mockMap.className =
  //       "w-full h-full bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center";
  //     mockMap.innerHTML =
  //       '<p class="text-gray-500 dark:text-gray-400">Interactive Map Would Load Here</p>';

  //     // Clear previous content and append mock map
  //     mapRef.current.innerHTML = "";
  //     mapRef.current.appendChild(mockMap);
  //   }
  // }, []);

  return (
    <div className="sticky top-24 h-[calc(100vh-12rem)] rounded-xl overflow-hidden shadow-md">
      <div
        // ref={mapRef}
        className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-xl"
      >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58665.18718002797!2d77.37940234891295!3d23.22218338253357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c433446896dfb%3A0xc104a185e0af7b8f!2sThe%20Sehat%20Wale%20Gold!5e0!3m2!1sen!2sin!4v1750714953317!5m2!1sen!2sin" width="600" className="h-full w-full" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
