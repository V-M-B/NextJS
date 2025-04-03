export default async function Second() {
    await new Promise((resolve) => setTimeout(() => {
       resolve("Intenetional delay") 
    }, 2000));

    return (
        <div>
            <h1>Second blog</h1>
        </div>
    );
}