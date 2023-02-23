function useDate() {
  const Time = new Date();
  const Today = Time.getDate();
  const Month = Time.getMonth();
  const Year = Time.getFullYear();

  const Datee = `${Today}/${Month + 1}/${Year}`;

  return Datee;
}

export default useDate;
