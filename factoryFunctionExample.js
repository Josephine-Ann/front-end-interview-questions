const community = () => {
    const colorHairOption = [
        "red",
        "brown",
        "blonde"
    ]
    const lengthHairOption = [
        "long",
        "short"
    ]
    const genderDescriptionOptions = [
        "girl",
        "boy",
        "person"
    ]
    const girls = {
        long: ["👩🏻‍🦰","👩🏻","👩🏼"],
        short: ["🧑🏿‍🦰", "🧑🏻", "🧑🏼"],
    }
    const boys = {
        long: ["👩🏻‍🦰", "🧔🏽‍♀️", "🧔🏼‍♀️"],
        short: ["👨🏻‍🦰","👨🏾","👱🏿‍♂️"]
    }
    const individuals = {
        long: ["🧑🏼‍🚒", "🦹🏽‍♀️", "🥷🏻",],
        short: ["👨🏼‍🌾", "💂🏼", "🧙🏾‍♀️"]
    }
    return {
        people: [],
        listing: "0 citizens, please populate your community!",
        newPersonMessage: "",
        expelledByLengthMessage: "",
        createPerson() {
            if (this.people.length <= 10) {
                let colorHairOptionNumber = Math.floor(Math.random() * 3)
                let colorHair = colorHairOption[colorHairOptionNumber];
                let hairLengthOptionNumber = Math.floor(Math.random() * 2)
                let hairLength = lengthHairOption[hairLengthOptionNumber];
                let genderDescriptionOptionNumber = Math.floor(Math.random() * 3);
                let genderDescription = genderDescriptionOptions[genderDescriptionOptionNumber];
                let citizen;
                if (genderDescription === "girl") {
                    citizen = girls[hairLength][colorHairOptionNumber]
                } else if (genderDescription === "boy") {
                    citizen = boys[hairLength][colorHairOptionNumber]
                } else {
                    citizen = individuals[hairLength][colorHairOptionNumber]
                }
                this.people.push({genderDescription, colorHair, hairLength, citizen})
                this.newPersonMessage = `Your new citizen has ${hairLength}, ${colorHair} hair and is a ${genderDescription}.`
            } else {
                this.newPersonMessage = `Sorry, you already have 10 citizens. That's the limit.`
            }
        },
        citizens() {
            const listing = this.people.map(function (element, index) {
                return `${element.citizen} Citizen number ${index + 1} has ${element.hairLength}, ${element.colorHair} hair and is a ${element.genderDescription}`
            });
            if (listing.length !== 0) this.listing = listing
        },
        expelByHairLength(hairLengthToEliminate) {
            const newCommunity = this.people.filter(person => {
                return person.hairLength !== hairLengthToEliminate
            })
            this.people = [...newCommunity]
            if (newCommunity.length === 0) {
                this.expelledByLengthMessage = `You have no more citizens!`
            } else if (this.people.length === newCommunity.length) {
                this.expelledByLengthMessage = `You don't have any citizens with ${hairLengthToEliminate} hair.`
            } else {
                this.expelledByLengthMessage = `Your population is now at just ${this.people.length} citizens.`
            }
            this.citizens()
        }
    }
}

export default community;