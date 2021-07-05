//segundoFetch
const scrollTracker = (event) => {
    const target = event.target
    const actualScroll = target.clientHeight + target.scrollTop;

    return actualScroll
}

export default scrollTracker;