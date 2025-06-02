// import React from "react";
// import { ContainerScroll } from "@/components/ui/container-scroll-animation";
// import Image from "next/image";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";

const ArticlePage = () => {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <h6 className="text-right align-item-left px-40 pt-18">10/09/2004</h6>
      <div className="px-40 py-18">
        <h1> {id} Ini judul</h1>
        <br />
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            sit, quia molestiae voluptatum sapiente expedita, laudantium amet
            cumque, ea ipsam officiis impedit sint itaque vitae. Non inventore
            porro impedit cupiditate! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Possimus sit, quia molestiae voluptatum sapiente
            expedita, laudantium amet cumque, ea ipsam officiis impedit sint
            itaque vitae. Non inventore porro impedit cupiditate! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Possimus sit, quia
            molestiae voluptatum sapiente expedita, laudantium amet cumque, ea
            ipsam officiis impedit sint itaque vitae. Non inventore porro
            impedit cupiditate! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Possimus sit, quia molestiae voluptatum sapiente
            expedita, laudantium amet cumque, ea ipsam officiis impedit sint
            itaque vitae. Non inventore porro impedit cupiditate!Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Possimus sit, quia
            molestiae voluptatum sapiente expedita, laudantium amet cumque, ea
            ipsam officiis impedit sint itaque vitae. Non inventore porro
            impedit cupiditate!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Possimus sit, quia molestiae voluptatum sapiente
            expedita, laudantium amet cumque, ea ipsam officiis impedit sint
            itaque vitae. Non inventore porro impedit cupiditate!Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Possimus sit, quia
            molestiae voluptatum sapiente expedita, laudantium amet cumque, ea
            ipsam officiis impedit sint itaque vitae. Non inventore porro
            impedit cupiditate!
          </p>
        </article>
      </div>
    </>
  );
};

export default ArticlePage;
