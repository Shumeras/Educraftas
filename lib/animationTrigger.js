function animationTriggerCallback(entries, ovserver)
{
    for(let entry of entries)
    {
        if(entry.isIntersecting)
        {
            // console.log(entry);
            entry.target.classList.replace("on-in-view-animation", "play-animation")
            inViewObserver.unobserve(entry.target);
        }
    }
}

let inViewObserver = new IntersectionObserver(animationTriggerCallback, {root: null, rootMargin: '0px', threshold: 0.5});
let elements = document.getElementsByClassName("on-in-view-animation");

for(let i = 0; i < elements.length; i++)
{
    inViewObserver.observe(elements[i]);
}