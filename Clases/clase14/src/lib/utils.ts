type TimeObject ={
    fyh:String,
    timestamp:Number
}

export const getTime = () => {
    return {
      fyh: new Date().toLocaleString(),
      timestamp: Date.now(),
    };
};

