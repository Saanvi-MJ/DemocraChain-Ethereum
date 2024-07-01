// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CityList {
    // Define an enum to represent the available cities
    enum City { Chikmagalur, Bangalore, Hassan, Kadur }

    // Structure to hold complaint details
    struct Complaint {
        address complainer;
        string text;
    }

    // Mapping from city index to list of complaints
    mapping(uint => Complaint[]) public complaints;

    // Function to retrieve a city name by its index in the enum
    function getCityName(uint index) public pure returns (string memory) {
        require(index >= uint(City.Chikmagalur) && index <= uint(City.Kadur), "Invalid city index");

        return index == uint(City.Chikmagalur) ? "Chikmagalur" :
               index == uint(City.Bangalore) ? "Bangalore" :
               index == uint(City.Hassan) ? "Hassan" :
               index == uint(City.Kadur) ? "Kadur" : "";
    }

    // Function to add a complaint
    function addComplaint(uint cityIndex, string memory complaintText) public {
        require(cityIndex >= uint(City.Chikmagalur) && cityIndex <= uint(City.Kadur), "Invalid city index");

        complaints[cityIndex].push(Complaint(msg.sender, complaintText));
    }

    // Function to get the number of complaints for a city
    function getComplaintCount(uint cityIndex) public view returns (uint) {
        require(cityIndex >= uint(City.Chikmagalur) && cityIndex <= uint(City.Kadur), "Invalid city index");

        return complaints[cityIndex].length;
    }

    // Function to get a specific complaint for a city
    function getComplaint(uint cityIndex, uint complaintIndex) public view returns (address, string memory) {
        require(cityIndex >= uint(City.Chikmagalur) && cityIndex <= uint(City.Kadur), "Invalid city index");
        require(complaintIndex < complaints[cityIndex].length, "Invalid complaint index");

        Complaint storage complaint = complaints[cityIndex][complaintIndex];
        return (complaint.complainer, complaint.text);
    }
}