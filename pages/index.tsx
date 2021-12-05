import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Scaffold from "../components/Scaffold";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Scaffold />
      <Header />
    </>
  );
}
