new Promise(async (resolve, reject) => {
  try {
    response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': 'f38da80f-2ea6-4e72-8c00-3a28204164b1',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const json = await response.json();
    console.log(json);
    resolve(json);
  } catch (ex) {
    response = null;
    console.log(ex);
    reject(ex);
  }
});