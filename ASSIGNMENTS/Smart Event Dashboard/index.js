let detailsArr = JSON.parse(localStorage.getItem("details")) || []
displayEvent(detailsArr)

document.querySelector("form").addEventListener("submit", getData)

function getData(e) {
    e.preventDefault();
    const eventTitle = document.querySelector("#eve_title").value
    const eventDate = document.querySelector("#eve_date").value
    const eventCategory = document.querySelector("#eve_category").value
    const eventDescription = document.querySelector("#eve_description").value
    let detailsObj = {
        eventTitle,
        eventDate,
        eventCategory,
        eventDescription
    }
    console.log(detailsObj);
    detailsArr.push(detailsObj)

    localStorage.setItem("details", JSON.stringify(detailsArr))

    console.log(detailsArr)

    displayEvent(detailsArr)
}

function displayEvent(arr) {
    let container = document.querySelector(".event_container")
    container.innerText = ""


    if (arr.length === 0) {
        let noEvePara = document.createElement("p")
        noEvePara.innerText = "No Events yet. Add your first event!!"
        noEvePara.style.color = "gray"
        noEvePara.style.textAlign = "center"
        container.append(noEvePara)
        return
    }

    arr.forEach((el, index) => {
        let eventCard = document.createElement("div")
        eventCard.setAttribute("class", "event_card")
        Object.assign(eventCard.style, {
            position: "relative",
            background: "linear-gradient(135deg, #ffffff, rgba(179, 119, 222, 0.5))",
            borderRadius: "6px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "20px",
            width: "320px",
            height: "225px"
        })

        let removeButton = document.createElement("div")
        removeButton.setAttribute("class", "remove_btn")
        removeButton.innerText = "x"
        Object.assign(removeButton.style, {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50px",
            backgroundColor: "rgba(255, 0, 0, 0.57)",
            color: "white",
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "25px",
            height: "25px",
            cursor: "pointer",
            placeItems: "center"
        })

        removeButton.addEventListener("click", removeEvent)
        function removeEvent() {
            detailsArr.splice(index, 1)
            localStorage.setItem("details", JSON.stringify(detailsArr))
            displayEvent(detailsArr)
        }

        let eve_title = document.createElement("h1")
        eve_title.innerText = el.eventTitle

        let eve_date = document.createElement("div")
        eve_date.innerText = "📆" + el.eventDate
        Object.assign(eve_date.style,{
            color: "gray",
            fontSize: "17px",
        })

        let eve_category = document.createElement("div")
        Object.assign(eve_category.style, {
            color: "white",
            borderRadius: "25px",
            padding: "5px 10px",
            backgroundColor: "rgb(106, 50, 226)",
            width: "fit-content",
        })
        eve_category.innerText = el.eventCategory


        let eve_description = document.createElement("div")
        eve_description.innerText = el.eventDescription
        eve_description.setAttribute("class", "event_decription")
        Object.assign(eve_description.style,{
            color: "gray",
            fontSize: "17px",
            
        })

        eventCard.append(eve_title, eve_date, eve_category, eve_description, removeButton)
        container.append(eventCard)
    })
}



document.querySelector(".clear_all").addEventListener("click", function() {
    localStorage.setItem("details", JSON.stringify([]))
    detailsArr = []
    displayEvent(detailsArr)
})

document.querySelector(".add_sample").addEventListener("click", function (){
    detailsArr = [
        {
            eventTitle: "Web Development Conference",
            eventDate: "2026-02-15",
            eventCategory: "Conference",
            eventDescription: "Annual conference on modern web technologies."
        },
        {
            eventTitle: "JavaScript Workshop",
            eventDate: "2026-02-20",
            eventCategory: "Workshop",
            eventDescription: "Hands-on JavaScript learning session."
        }
    ]

    displayEvent(detailsArr)
})

document.querySelector("#keyOutput").addEventListener("keydown", function(e){
    document.querySelector("#keyOutput").innerText = "You Pressed:" + " " + e.key
})