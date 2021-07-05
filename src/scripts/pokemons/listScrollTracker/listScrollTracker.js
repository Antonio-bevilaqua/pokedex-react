//segundoFetch
const listScrollTracker = (event) => {
    const target = event.target;
    let actualScroll = target.clientHeight + target.scrollTop;

    if (actualScroll >= target.scrollHeight - 100) {
        return true
    }

    return false
}

export default listScrollTracker;