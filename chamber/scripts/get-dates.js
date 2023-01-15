function LastModified() {
    return document.lastModified;
}

function CopyRightYear() {
    return new Date().toLocaleDateString("en-US", { year: "numeric" });
}

document.querySelector('#copyright').innerHTML = `©${CopyRightYear()} Jared Doerr Utah, United States of America`;