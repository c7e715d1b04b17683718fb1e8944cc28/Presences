import fetch from "cross-fetch";
export default async function fetchSchema() {
    return (await fetch("https://schemas.premid.app/metadata/1.12")).json();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hTY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZnVuY3Rpb25zL2ZldGNoU2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLGFBQWEsQ0FBQztBQUVoQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssVUFBVSxXQUFXO0lBQ3hDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekUsQ0FBQyJ9