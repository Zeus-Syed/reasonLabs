var moment = require('moment');
import Order from '../models/orders';

/**
 * delays the program execution (assuming the pipeline is in progress)
 * @param seconds number
 * @returns 
 */
const preparationInProgress = (seconds) => {
    return new Promise(resolve => setTimeout(resolve, seconds));
}

/**
 *  handler for particular process
 * @param orderId number
 * @param pipeLineTime object
 * @param type string
 * @param seconds number
 */
const process = async (orderId, pipeLineTime, type, seconds) => {
  try {
    if (type == "dough") {
      pipeLineTime.dough.start = moment();
    } else if (type == "topping") {
      pipeLineTime.topping.start = moment();
    } else if (type == "oven") {
      pipeLineTime.oven.start = moment();
    } else if (type == "waiter") {
      pipeLineTime.waiter.start = moment();
    }
    console.log(`${orderId} ${type} Start`, moment().format("hh:mm:ss a"));
    await preparationInProgress(seconds);
    if (type == "dough") {
      pipeLineTime.dough.end = moment();
    } else if (type == "topping") {
      pipeLineTime.topping.end = moment();
    } else if (type == "oven") {
      pipeLineTime.oven.end = moment();
    } else if (type == "waiter") {
      pipeLineTime.waiter.end = moment();
    }
    console.log(`${orderId} ${type} End`, moment().format("hh:mm:ss a"));
  } catch (error) {
    console.log("process", error);
  }
};

/**
 * Initiates the order
 * @param orderId number
 */
export const initiateOrder = async (orderId) => {
  try {
    let orderStartTime = moment();
    console.log(`${orderId} Order Start`, moment().format("hh:mm:ss a"));
    let pipeLineTime = {
      dough: {
        start: "",
        end: "",
      },
      topping: {
        start: "",
        end: "",
      },
      oven: {
        start: "",
        end: "",
      },
      waiter: {
        start: "",
        end: "",
      },
    };
    await process(orderId, pipeLineTime, "dough", 7000);
    await process(orderId, pipeLineTime, "topping", 4000);
    await process(orderId, pipeLineTime, "oven", 10000);
    await process(orderId, pipeLineTime, "waiter", 5000);
    let orderEndTime = moment();
    console.log(`${orderId} Order End`, moment().format("hh:mm:ss a"));
    const dif = moment.duration(orderEndTime.diff(orderStartTime));
    console.log(
      `${orderId} Total Time
      ${dif.minutes()} mins  ${dif.seconds()} secs`
    );
    await new Order({ orderReport: JSON.stringify(pipeLineTime) }).save();
  } catch (error) {
    console.log("initiateOrder", error);
  }
};

