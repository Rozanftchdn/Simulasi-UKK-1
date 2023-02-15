const luasLingkaran = document.getElementById("luasLingkaran");
const lingkaranContainer = document.getElementById("lingkaran");
const ruasInput = document.getElementById("ruas");

const hasilLingkaran = JSON.parse(localStorage.getItem("lingkaran")) || [];

const Hitung = (ruas, hasil) => {
    hasilLingkaran.push({
        ruas,
        hasil
    });
    localStorage.setItem("lingkaran", JSON.stringify(hasilLingkaran));
    return {ruas, hasil};
}
const buatLingkaran = ({ ruas, hasil}) => {
    const divLingkaran = document.createElement("div");
    const Ruas1 = document.createElement("p");
    const hr = document.createElement("hr");
    const hasil1 = document.createElement("h3");

    Ruas1.innerHTML = "Ruas :" +ruas;
    hasil1.innerHTML = "Hasil Luas Lingkaran : " + hasil;

    divLingkaran.append(Ruas1, hasil1, hr);
    lingkaranContainer.appendChild(divLingkaran);
    lingkaranContainer.style.display = hasilLingkaran.length === 0 ? "none" : "flex";
};
lingkaranContainer.style.display = hasilLingkaran.length === 0 ? "none" : "flex";
hasilLingkaran.forEach(buatLingkaran);

    luasLingkaran.onsubmit = e =>{
    e.preventDefault()

    const Ruas = ruas.value;
    const Luas= (Ruas*Ruas)*3.14;

    const newLingkaran = Hitung (
        Ruas,
        Luas
    );
buatLingkaran(newLingkaran);
ruas.value = "";}