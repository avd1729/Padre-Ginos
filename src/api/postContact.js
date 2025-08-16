export default async function postContact(name, email, message){
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({name, email, message})
    });

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = response.json();
    return data;
}