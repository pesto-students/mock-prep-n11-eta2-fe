import axios from "axios";
import * as Sentry from "@sentry/react";

//Get Call
export async function getData(url) {
  try {
    let res = await axios.get(url);
    return { status: "success", res };
  } catch (err) {
    return { status: "failure", err: "Inserting Data Failed" };
  }
}

// Post Call
export async function insertData(url, data) {
  try {
    let res = await axios.post(url, data);
    return { status: "success", res };
  } catch (err) {
    return { status: "failure", err: "Inserting Data Failed" };
  }
}

// Delete Call
export async function removeData(url) {
  try {
    let res = await axios.delete(url);
    return { status: "success", res };
  } catch (err) {
    return { status: "failure", err: "Removing Data Failed" };
  }
}

// Update Call
export async function updateData(url, data) {
  try {
    let res = await axios.post(url, data);
    return { status: "success", res };
  } catch (err) {
    return { status: "failure", err: "Updating Data Failed" };
  }
}

// Post Call
export async function createOrder(url, data) {
  try {
    let res = await axios.post(url, data);
    return { status: "success", res };
  } catch (err) {
    return { status: "failure", err: "Creating order Failed" };
  }
}
