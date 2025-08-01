import { useState, useEffect } from "react";

const Filter = () => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]); // Menyimpan data dari API

  // Ambil data dari API ketika komponen pertama kali dimuat
  useEffect(() => {
    fetch("http://localhost:4000/blogContent")
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Simpan data dari API
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Hanya dijalankan sekali saat komponen pertama kali dimuat

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setInputValue(query);

    // Cek apakah ada kata yang cocok dengan query
    if (query) {
      const filteredResults = data.filter(
        (item) => item.title.toLowerCase().includes(query.toLowerCase()) // Ganti 'title' dengan key yang sesuai dengan data API
      );

      // Menyaring dan menyusun hasil pencarian dalam format objek {title, date, content}
      setResults(
        filteredResults.map((result) => ({
          title: result.title,
          date: result.date,
          content: result.content,
        }))
      );
    } else {
      setResults([]); // Reset hasil jika input kosong
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("✅ Form submitted!");
    console.log("Input:", inputValue);
  };

  return (
    <>
      <div className="items-center justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="input disini"
            className="bg-slate-300 "
            onChange={handleChange}
            value={inputValue}
          />
          <button type="submit" className=" text-white">
            submit
          </button>
        </form>
      </div>

      {/* Tampilkan hasil pencarian hanya jika ada kecocokan */}
      {results.length > 0 && (
        <div className="mt-4 p-2 bg-white shadow-md">
          <h3 className="font-bold">Hasil Pencarian:</h3>
          <ul>
            {results.map((result, index) => (
              <li key={index} className="text-black">
                <h4 className="font-bold">{result.title}</h4>
                <p className="text-sm text-gray-500">{result.date}</p>
                <p>{result.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Filter;
