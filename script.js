const countEle = document.getElementById("count")
let countDown = 10

const timer = () => {
    countEle.textContent = countDown


    setTimeout(() => {
        countDown--
        countEle.textContent = countDown

        setTimeout(() => {
            countDown--
            countEle.textContent = countDown

            setTimeout(() => {
                countDown--
                countEle.textContent = countDown

                setTimeout(() => {
                    countDown--
                    countEle.textContent = countDown

                    setTimeout(() => {
                        countDown--
                        countEle.textContent = countDown

                        setTimeout(() => {
                            countDown--
                            countEle.textContent = countDown

                            setTimeout(() => {
                                countDown--
                                countEle.textContent = countDown

                                setTimeout(() => {
                                    countDown--
                                    countEle.textContent = countDown

                                    setTimeout(() => {
                                        countDown--
                                        countEle.textContent = countDown

                                        setTimeout(() => {
                                            countDown--
                                            countEle.textContent = `Happy Developers Day `

                                        }, 1000)

                                    }, 1000)

                                }, 1000)

                            }, 1000)

                        }, 1000)

                    }, 1000)

                }, 1000)

            }, 1000)

        }, 1000)

    }, 1000)
}

timer()