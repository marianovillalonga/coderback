;(async () => {

    await db
   
    const firstPage = getPageParams(1)
    console.log({ firstPage })
    const firstUsers = await userModel.find({}, { name: 1, email: 1, _id: 0 }).limit(firstPage.limit).skip(firstPage.skip)
    console.log({ firstUsers })
   
    const secondPage = getPageParams(2)
    console.log({ secondPage })
    const secondUsers = await userModel.find({}, { name: 1, email: 1, _id: 0 }).limit(secondPage.limit).skip(secondPage.skip)
    console.log({ secondUsers })
   
    process.exit()
   
   })()
   