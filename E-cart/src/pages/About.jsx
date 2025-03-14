import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <div className="text-black dark:text-slate-400 min-h-screen mt-16 md:mt-20 mx-4 items-center justify-center">
        <div className="mt-6 mb-6">
          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>company</th>
                  <th>location</th>
                  <th>Last Login</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Littel, Schaden and Vandervort</td>
                  <td>Canada</td>
                  <td>12/16/2020</td>
                  <td>Blue</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Zemlak, Daniel and Leannon</td>
                  <td>United States</td>
                  <td>12/5/2020</td>
                  <td>Purple</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Carroll Group</td>
                  <td>China</td>
                  <td>8/15/2020</td>
                  <td>Red</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Marjy Ferencz</td>
                  <td>Office Assistant I</td>
                  <td>Rowe-Schoen</td>
                  <td>Russia</td>
                  <td>3/25/2021</td>
                  <td>Crimson</td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Yancy Tear</td>
                  <td>Community Outreach Specialist</td>
                  <td>Wyman-Ledner</td>
                  <td>Brazil</td>
                  <td>5/22/2020</td>
                  <td>Indigo</td>
                </tr>
                <tr>
                  <th>6</th>
                  <td>Irma Vasilik</td>
                  <td>Editor</td>
                  <td>Wiza, Bins and Emard</td>
                  <td>Venezuela</td>
                  <td>12/8/2020</td>
                  <td>Purple</td>
                </tr>
                <tr>
                  <th>7</th>
                  <td>Meghann Durtnal</td>
                  <td>Staff Accountant IV</td>
                  <td>Schuster-Schimmel</td>
                  <td>Philippines</td>
                  <td>2/17/2021</td>
                  <td>Yellow</td>
                </tr>
                <tr>
                  <th>8</th>
                  <td>Sammy Seston</td>
                  <td>Accountant I</td>
                  <td>O'Hara, Welch and Keebler</td>
                  <td>Indonesia</td>
                  <td>5/23/2020</td>
                  <td>Crimson</td>
                </tr>
                <tr>
                  <th>9</th>
                  <td>Lesya Tinham</td>
                  <td>Safety Technician IV</td>
                  <td>Turner-Kuhlman</td>
                  <td>Philippines</td>
                  <td>2/21/2021</td>
                  <td>Maroon</td>
                </tr>
                <tr>
                  <th>10</th>
                  <td>Zaneta Tewkesbury</td>
                  <td>VP Marketing</td>
                  <td>Sauer LLC</td>
                  <td>Chad</td>
                  <td>6/23/2020</td>
                  <td>Green</td>
                </tr>
                <tr>
                  <th>11</th>
                  <td>Andy Tipple</td>
                  <td>Librarian</td>
                  <td>Hilpert Group</td>
                  <td>Poland</td>
                  <td>7/9/2020</td>
                  <td>Indigo</td>
                </tr>
                <tr>
                  <th>12</th>
                  <td>Sophi Biles</td>
                  <td>Recruiting Manager</td>
                  <td>Gutmann Inc</td>
                  <td>Indonesia</td>
                  <td>2/12/2021</td>
                  <td>Maroon</td>
                </tr>
                <tr>
                  <th>13</th>
                  <td>Florida Garces</td>
                  <td>Web Developer IV</td>
                  <td>Gaylord, Pacocha and Baumbach</td>
                  <td>Poland</td>
                  <td>5/31/2020</td>
                  <td>Purple</td>
                </tr>
                <tr>
                  <th>14</th>
                  <td>Maribeth Popping</td>
                  <td>Analyst Programmer</td>
                  <td>Deckow-Pouros</td>
                  <td>Portugal</td>
                  <td>4/27/2021</td>
                  <td>Aquamarine</td>
                </tr>
                <tr>
                  <th>15</th>
                  <td>Moritz Dryburgh</td>
                  <td>Dental Hygienist</td>
                  <td>Schiller, Cole and Hackett</td>
                  <td>Sri Lanka</td>
                  <td>8/8/2020</td>
                  <td>Crimson</td>
                </tr>
                <tr>
                  <th>16</th>
                  <td>Reid Semiras</td>
                  <td>Teacher</td>
                  <td>Sporer, Sipes and Rogahn</td>
                  <td>Poland</td>
                  <td>7/30/2020</td>
                  <td>Green</td>
                </tr>
                <tr>
                  <th>17</th>
                  <td>Alec Lethby</td>
                  <td>Teacher</td>
                  <td>Reichel, Glover and Hamill</td>
                  <td>China</td>
                  <td>2/28/2021</td>
                  <td>Khaki</td>
                </tr>
                <tr>
                  <th>18</th>
                  <td>Aland Wilber</td>
                  <td>Quality Control Specialist</td>
                  <td>Kshlerin, Rogahn and Swaniawski</td>
                  <td>Czech Republic</td>
                  <td>9/29/2020</td>
                  <td>Purple</td>
                </tr>
                <tr>
                  <th>19</th>
                  <td>Teddie Duerden</td>
                  <td>Staff Accountant III</td>
                  <td>Pouros, Ullrich and Windler</td>
                  <td>France</td>
                  <td>10/27/2020</td>
                  <td>Aquamarine</td>
                </tr>
                <tr>
                  <th>20</th>
                  <td>Lorelei Blackstone</td>
                  <td>Data Coordiator</td>
                  <td>Witting, Kutch and Greenfelder</td>
                  <td>Kazakhstan</td>
                  <td>6/3/2020</td>
                  <td>Red</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>company</th>
                  <th>location</th>
                  <th>Last Login</th>
                  <th>Favorite Color</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="w-full justify-center flex my-20">
          <div className="bg-slate-950 stats shadow h-64">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Likes</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Page Views</div>
              <div className="stat-value text-secondary">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZWD3D24cxVBucYc4dklLYs5KmY8PX7bZmQ&s" />
                  </div>
                </div>
              </div>
              <div className="stat-value">86%</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
