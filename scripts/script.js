const shortLink = "link.lapzupi.com/"
const rootDomain = "lapzupi.com"

// For now, these should be secured in the future.
const unSecureSlugs = ["discord", "store"]

function openShortLink(slug) {
    openLink(shortLink + slug);
}

function openSubDomainLink(sub) {
    if (unSecureSlugs.includes(sub)) {
        openLink("http://" + sub + "." + rootDomain);
        return;
    }

    openLink("https://" +sub + "." + rootDomain);
}

function openLink(link) {
    window.open(link);
}

function copyLinkAndSendMessage(link) {
    navigator.clipboard.writeText(link);
    alert("Copied IP: " + link);
}