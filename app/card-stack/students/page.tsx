'use client'
import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

const studentMembers = [
  // Core Team
  { name: "Tanishk", team: "Core Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "President", skills: ["Leadership", "Strategy", "UX Design"], year: "3rd Year", role: "Leads club initiatives", branch: "Computer Science", bio: "Visionary leader driving the UX Club forward with innovative ideas and strategic planning." },
  { name: "Sujal", team: "Core Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Vice President", skills: ["Management", "Coordination", "Design Thinking"], year: "3rd Year", role: "Supports club operations", branch: "Information Technology", bio: "Dedicated to ensuring smooth club operations and fostering a collaborative environment." },
  { name: "Sonakshi", team: "Core Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Secretary", skills: ["Documentation", "Communication", "Organization"], year: "2nd Year", role: "Manages club records", branch: "Computer Science", bio: "Organized and detail-oriented, ensuring all club activities are well-documented and communicated." },
  { name: "Rishit Aggarwal", team: "Core Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Treasurer", skills: ["Finance", "Budgeting", "Planning"], year: "3rd Year", role: "Manages club finances", branch: "Electronics", bio: "Financially savvy member responsible for budget allocation and resource management." },
  { name: "Harsh Gupta", team: "Core Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Joint Secretary", skills: ["Coordination", "Event Planning", "Teamwork"], year: "2nd Year", role: "Assists in club management", branch: "Computer Science", bio: "Enthusiastic team player who assists in coordinating club activities and events." },

  // Event Management Team
  { name: "Yash Verma", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Event Lead", skills: ["Event Planning", "Logistics", "Team Management"], year: "3rd Year", role: "Leads event planning", branch: "Computer Science", bio: "Expert in organizing large-scale events with attention to every detail." },
  { name: "Atherva Sahai", team: "Event Management", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Event Co-Lead", skills: ["Coordination", "Venue Management", "Scheduling"], year: "2nd Year", role: "Coordinates events", branch: "Information Technology", bio: "Skilled coordinator ensuring seamless execution of club events." },
  { name: "Manas Saraf", team: "Event Management", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Event Member", skills: ["Logistics", "Planning", "Execution"], year: "2nd Year", role: "Event coordination", branch: "Computer Science", bio: "Passionate about creating memorable event experiences for all attendees." },
  { name: "Abhimayu Singh", team: "Event Management", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Event Member", skills: ["Event Setup", "Coordination", "Teamwork"], year: "1st Year", role: "Event support", branch: "Mechanical", bio: "Energetic member contributing to successful event execution." },
  { name: "Atharv Srivastava", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Event Member", skills: ["Planning", "Logistics", "Communication"], year: "2nd Year", role: "Event planning", branch: "Electronics", bio: "Creative thinker bringing fresh ideas to event planning." },
  { name: "Shivam Waghule", team: "Event Management", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Event Member", skills: ["Venue Setup", "Coordination", "Team Support"], year: "1st Year", role: "Event assistance", branch: "Computer Science", bio: "Dedicated team member ensuring smooth event operations." },
  { name: "Koushani Banerjee", team: "Event Management", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Event Member", skills: ["Guest Management", "Hospitality", "Planning"], year: "2nd Year", role: "Guest coordination", branch: "Information Technology", bio: "Warm and welcoming member focused on guest experience." },
  { name: "Sonakshi Dashore", team: "Event Management", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Event Member", skills: ["Scheduling", "Documentation", "Coordination"], year: "2nd Year", role: "Event documentation", branch: "Computer Science", bio: "Organized member maintaining detailed event records and schedules." },
  { name: "Ipsita Singh", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Event Member", skills: ["Creativity", "Decoration", "Theme Design"], year: "1st Year", role: "Event decoration", branch: "Design", bio: "Creative mind behind beautiful event decorations and themes." },
  { name: "Shivani Chaudhary", team: "Event Management", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Event Member", skills: ["Volunteer Management", "Coordination", "Leadership"], year: "2nd Year", role: "Volunteer coordination", branch: "Computer Science", bio: "Excellent at managing and motivating volunteer teams." },
  { name: "Sarva Shresth Saini", team: "Event Management", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Event Member", skills: ["Technical Setup", "AV Management", "Coordination"], year: "2nd Year", role: "Technical support", branch: "Electronics", bio: "Tech-savvy member handling all audio-visual requirements." },
  { name: "Niharika Sharma", team: "Event Management", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Event Member", skills: ["Registration", "Attendee Management", "Data Entry"], year: "1st Year", role: "Registration management", branch: "Information Technology", bio: "Efficient in managing event registrations and attendee data." },
  { name: "Naini Nautiyal", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Event Member", skills: ["Catering Coordination", "Vendor Management", "Logistics"], year: "2nd Year", role: "Catering coordination", branch: "Computer Science", bio: "Expert in coordinating food and beverage arrangements." },
  { name: "Yug Wankhede", team: "Event Management", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Event Member", skills: ["Stage Management", "Presentation", "Coordination"], year: "1st Year", role: "Stage management", branch: "Mechanical", bio: "Ensures smooth stage operations during events." },
  { name: "Kimaya Holkar", team: "Event Management", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Event Member", skills: ["Photography", "Videography", "Documentation"], year: "2nd Year", role: "Event documentation", branch: "Design", bio: "Captures memorable moments from all club events." },
  { name: "Pradumn Mathur", team: "Event Management", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Event Member", skills: ["Budget Planning", "Procurement", "Resource Management"], year: "2nd Year", role: "Budget management", branch: "Electronics", bio: "Skilled in managing event budgets and resources efficiently." },
  { name: "Lakshy Jain", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Event Member", skills: ["Sponsorship", "Outreach", "Networking"], year: "3rd Year", role: "Sponsorship coordination", branch: "Computer Science", bio: "Connects with sponsors and partners for event support." },
  { name: "Shivangi Agnihotri", team: "Event Management", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Event Member", skills: ["Marketing", "Promotion", "Social Media"], year: "2nd Year", role: "Event marketing", branch: "Information Technology", bio: "Creative marketer promoting events across platforms." },
  { name: "Shivansh Prashant", team: "Event Management", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Event Member", skills: ["Logistics", "Transportation", "Coordination"], year: "1st Year", role: "Logistics support", branch: "Mechanical", bio: "Handles transportation and logistics for events." },
  { name: "Atharva Dhanraj Naik", team: "Event Management", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Event Member", skills: ["Security", "Crowd Management", "Safety"], year: "2nd Year", role: "Security coordination", branch: "Electronics", bio: "Ensures safety and security during all events." },
  { name: "Yaana Rajput", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Event Member", skills: ["Invitation Design", "Communication", "Guest Relations"], year: "1st Year", role: "Guest relations", branch: "Design", bio: "Creates beautiful invitations and manages guest communications." },
  { name: "Bhagyesh Amol Yeole", team: "Event Management", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Event Member", skills: ["Technical Support", "Equipment Setup", "Troubleshooting"], year: "2nd Year", role: "Technical assistance", branch: "Computer Science", bio: "Reliable tech support for all event requirements." },
  { name: "Aditi Verma", team: "Event Management", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Event Member", skills: ["Workshop Planning", "Session Management", "Coordination"], year: "2nd Year", role: "Workshop coordination", branch: "Information Technology", bio: "Organizes engaging workshops and interactive sessions." },
  { name: "Tushti Agarwal", team: "Event Management", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Event Member", skills: ["Networking Events", "Panel Discussions", "Moderation"], year: "3rd Year", role: "Panel coordination", branch: "Computer Science", bio: "Expert at organizing networking events and panel discussions." },
  { name: "Yash Kumar Singh", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Event Member", skills: ["Competition Management", "Judging Coordination", "Rules"], year: "2nd Year", role: "Competition management", branch: "Electronics", bio: "Manages design competitions and hackathons." },
  { name: "Sneha Tamrakar", team: "Event Management", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Event Member", skills: ["Certificate Design", "Awards", "Recognition"], year: "1st Year", role: "Awards coordination", branch: "Design", bio: "Designs certificates and coordinates award ceremonies." },
  { name: "Diya Sambharia", team: "Event Management", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Event Member", skills: ["Feedback Collection", "Survey Design", "Analysis"], year: "2nd Year", role: "Feedback management", branch: "Information Technology", bio: "Collects and analyzes feedback to improve future events." },
  { name: "Manvi Modi", team: "Event Management", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Event Member", skills: ["Time Management", "Scheduling", "Coordination"], year: "2nd Year", role: "Schedule management", branch: "Computer Science", bio: "Ensures all events run on time and as planned." },
  { name: "Divyansh Singh", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Event Member", skills: ["Venue Scouting", "Space Planning", "Negotiation"], year: "1st Year", role: "Venue management", branch: "Architecture", bio: "Finds and prepares perfect venues for events." },
  { name: "Akhil Joshi", team: "Event Management", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Event Member", skills: ["Entertainment", "Performance Coordination", "MC"], year: "2nd Year", role: "Entertainment coordination", branch: "Computer Science", bio: "Coordinates entertainment and performances at events." },
  { name: "Hariom Patidar", team: "Event Management", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Event Member", skills: ["Emergency Response", "First Aid", "Safety"], year: "2nd Year", role: "Safety coordination", branch: "Mechanical", bio: "Trained in emergency response and event safety." },
  { name: "Lakshya Mangla", team: "Event Management", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Event Member", skills: ["Merchandise", "Swag Design", "Distribution"], year: "1st Year", role: "Merchandise coordination", branch: "Design", bio: "Designs and distributes event merchandise and swag." },
  { name: "M K Nandhini", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Event Member", skills: ["Post-Event Analysis", "Reporting", "Documentation"], year: "2nd Year", role: "Post-event analysis", branch: "Information Technology", bio: "Analyzes event success and prepares comprehensive reports." },

  // Technical Team
  { name: "Yeshu Agarwal", team: "Technical Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Tech Lead", skills: ["Full Stack Development", "System Architecture", "Leadership"], year: "3rd Year", role: "Leads technical initiatives", branch: "Computer Science", bio: "Experienced developer leading the technical vision of the club." },
  { name: "Jhalak Sahgal", team: "Technical Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Tech Co-Lead", skills: ["Frontend Development", "React", "UI Engineering"], year: "3rd Year", role: "Frontend architecture", branch: "Information Technology", bio: "Frontend expert crafting beautiful and performant user interfaces." },
  { name: "Raj Kumar", team: "Technical Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Developer", skills: ["Next.js", "TypeScript", "Tailwind CSS"], year: "2nd Year", role: "Web development", branch: "Computer Science", bio: "Passionate about building modern web applications with cutting-edge technologies." },
  { name: "Srija Panda", team: "Technical Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Developer", skills: ["Backend Development", "Node.js", "Databases"], year: "2nd Year", role: "Backend development", branch: "Computer Science", bio: "Backend specialist ensuring robust and scalable server architecture." },
  { name: "Mausam Kar", team: "Technical Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Developer", skills: ["Mobile Development", "React Native", "Flutter"], year: "2nd Year", role: "Mobile development", branch: "Electronics", bio: "Mobile app developer creating cross-platform experiences." },
  { name: "Abhishek Tripathi", team: "Technical Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Developer", skills: ["DevOps", "Cloud Services", "CI/CD"], year: "3rd Year", role: "DevOps management", branch: "Computer Science", bio: "DevOps engineer streamlining deployment and infrastructure." },
  { name: "Devansh Bansal", team: "Technical Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Developer", skills: ["Python", "Machine Learning", "Data Science"], year: "2nd Year", role: "ML development", branch: "Computer Science", bio: "Data enthusiast exploring machine learning applications in UX." },
  { name: "Tarni Jain", team: "Technical Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Developer", skills: ["API Development", "Microservices", "System Design"], year: "2nd Year", role: "API development", branch: "Information Technology", bio: "Skilled in designing and implementing robust APIs." },
  { name: "Deepti Singh", team: "Technical Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Developer", skills: ["Testing", "QA", "Automation"], year: "2nd Year", role: "Quality assurance", branch: "Computer Science", bio: "Quality advocate ensuring bug-free and reliable software." },
  { name: "Varun Kushwah", team: "Technical Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Developer", skills: ["Security", "Ethical Hacking", "Cybersecurity"], year: "3rd Year", role: "Security specialist", branch: "Computer Science", bio: "Cybersecurity enthusiast protecting club digital assets." },
  { name: "Aniket Kumar", team: "Technical Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Developer", skills: ["Blockchain", "Web3", "Smart Contracts"], year: "2nd Year", role: "Web3 development", branch: "Computer Science", bio: "Exploring blockchain technology and decentralized applications." },

  // Content Team
  { name: "Harsh Mahesh Math", team: "Content Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Content Lead", skills: ["Content Strategy", "Copywriting", "Editing"], year: "3rd Year", role: "Leads content creation", branch: "Computer Science", bio: "Strategic thinker crafting compelling narratives for the club." },
  { name: "Pranjali Sharma", team: "Content Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Content Co-Lead", skills: ["Blog Writing", "SEO", "Research"], year: "2nd Year", role: "Content strategy", branch: "Information Technology", bio: "Passionate writer creating engaging blog content and articles." },
  { name: "Arya Sankar Ram TS", team: "Content Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Content Writer", skills: ["Technical Writing", "Documentation", "Tutorials"], year: "2nd Year", role: "Technical documentation", branch: "Computer Science", bio: "Technical writer making complex concepts accessible to all." },
  { name: "Arpith Sharma", team: "Content Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Content Writer", skills: ["Creative Writing", "Storytelling", "Scriptwriting"], year: "2nd Year", role: "Creative content", branch: "Design", bio: "Creative storyteller bringing the club's vision to life." },
  { name: "Abhinav Jha", team: "Content Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Content Writer", skills: ["News Writing", "Press Releases", "Journalism"], year: "1st Year", role: "News and updates", branch: "Computer Science", bio: "Keeps everyone updated with the latest club news." },
  { name: "Arpita", team: "Content Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Content Writer", skills: ["Social Media Content", "Captions", "Trends"], year: "2nd Year", role: "Social content", branch: "Information Technology", bio: "Creates engaging social media content that resonates." },
  { name: "Pranesha Dev", team: "Content Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Content Writer", skills: ["Email Marketing", "Newsletter", "Communication"], year: "2nd Year", role: "Email content", branch: "Computer Science", bio: "Crafts compelling newsletters and email campaigns." },
  { name: "Bellappagari Monisha", team: "Content Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Content Writer", skills: ["Case Studies", "Research", "Analysis"], year: "2nd Year", role: "Case study creation", branch: "Design", bio: "Researches and writes detailed UX case studies." },
  { name: "Ayushmaan Joshi", team: "Content Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Content Writer", skills: ["Video Scripts", "Presentations", "Speechwriting"], year: "1st Year", role: "Script writing", branch: "Computer Science", bio: "Writes engaging scripts for videos and presentations." },
  { name: "Pragya Kochar", team: "Content Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Content Writer", skills: ["Proofreading", "Editing", "Grammar"], year: "2nd Year", role: "Editing and review", branch: "Information Technology", bio: "Meticulous editor ensuring error-free content." },
  { name: "Shraddha Gupta", team: "Content Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Content Writer", skills: ["Interview Content", "Profiles", "Features"], year: "2nd Year", role: "Member profiles", branch: "Computer Science", bio: "Creates engaging member profiles and feature stories." },
  { name: "Soham S Malvankar", team: "Content Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Content Writer", skills: ["Event Coverage", "Live Updates", "Reporting"], year: "1st Year", role: "Event coverage", branch: "Electronics", bio: "Provides live coverage and updates during events." },
  { name: "Anubhav Ranjan", team: "Content Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Content Writer", skills: ["UX Writing", "Microcopy", "Product Content"], year: "2nd Year", role: "UX writing", branch: "Design", bio: "Specializes in UX writing and microcopy for products." },
  { name: "Riddhiraj Roy", team: "Content Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Content Writer", skills: ["Podcast Scripts", "Audio Content", "Voiceovers"], year: "2nd Year", role: "Audio content", branch: "Computer Science", bio: "Creates scripts for podcasts and audio content." },

  // PR Team
  { name: "Mansi", team: "PR Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "PR Lead", skills: ["Public Relations", "Media Outreach", "Branding"], year: "3rd Year", role: "Leads PR initiatives", branch: "Information Technology", bio: "Strategic PR professional building the club's public image." },
  { name: "Prateek", team: "PR Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "PR Co-Lead", skills: ["Corporate Relations", "Partnerships", "Networking"], year: "3rd Year", role: "Corporate outreach", branch: "Computer Science", bio: "Builds strategic partnerships with industry leaders." },
  { name: "Mahi Sharma", team: "PR Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "PR Member", skills: ["Campus Outreach", "Student Relations", "Promotion"], year: "2nd Year", role: "Campus relations", branch: "Design", bio: "Connects with students across campus to grow the club." },
  { name: "Ekansh Sukla", team: "PR Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "PR Member", skills: ["Sponsorship", "Fundraising", "Proposal Writing"], year: "2nd Year", role: "Sponsorship management", branch: "Computer Science", bio: "Secures sponsorships and funding for club activities." },
  { name: "Atharva Chourey", team: "PR Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "PR Member", skills: ["Crisis Management", "Communication", "Strategy"], year: "2nd Year", role: "Communication strategy", branch: "Information Technology", bio: "Handles sensitive communications with professionalism." },
  { name: "Manyata Sharma", team: "PR Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "PR Member", skills: ["Alumni Relations", "Networking", "Engagement"], year: "2nd Year", role: "Alumni outreach", branch: "Computer Science", bio: "Maintains strong connections with club alumni." },
  { name: "Nityansh Dixit", team: "PR Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "PR Member", skills: ["Inter-Club Relations", "Collaboration", "Coordination"], year: "1st Year", role: "Inter-club coordination", branch: "Electronics", bio: "Facilitates collaborations with other campus clubs." },
  { name: "Sara Manocha", team: "PR Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "PR Member", skills: ["Faculty Relations", "Academic Outreach", "Presentations"], year: "2nd Year", role: "Faculty relations", branch: "Computer Science", bio: "Maintains positive relationships with faculty members." },
  { name: "Kritika Maurya", team: "PR Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "PR Member", skills: ["Industry Connect", "Professional Networking", "Outreach"], year: "2nd Year", role: "Industry relations", branch: "Information Technology", bio: "Connects the club with industry professionals." },
  { name: "Rashmi Priya", team: "PR Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "PR Member", skills: ["Event Promotion", "Marketing", "Outreach"], year: "1st Year", role: "Event promotion", branch: "Design", bio: "Promotes events to maximize attendance and engagement." },
  { name: "Keshav Maheshwari", team: "PR Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "PR Member", skills: ["Public Speaking", "Representation", "Advocacy"], year: "2nd Year", role: "Club representation", branch: "Computer Science", bio: "Represents the club at various forums and events." },
  { name: "Tarun Sengar", team: "PR Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "PR Member", skills: ["Brand Management", "Identity", "Consistency"], year: "2nd Year", role: "Brand management", branch: "Electronics", bio: "Ensures consistent brand identity across all channels." },
  { name: "Shreyansh Nandan Shukla", team: "PR Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "PR Member", skills: ["Recruitment", "Onboarding", "Talent Acquisition"], year: "2nd Year", role: "Member recruitment", branch: "Computer Science", bio: "Attracts and onboards new talented members to the club." },
  { name: "Shruti Gangwar", team: "PR Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "PR Member", skills: ["Community Building", "Engagement", "Retention"], year: "1st Year", role: "Community engagement", branch: "Information Technology", bio: "Builds and nurtures the club's community." },
  { name: "Akshara Shah", team: "PR Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "PR Member", skills: ["Feedback Management", "Surveys", "Improvement"], year: "2nd Year", role: "Feedback coordination", branch: "Computer Science", bio: "Gathers feedback to continuously improve club operations." },
  { name: "Debadrita Mukhopadhyay", team: "PR Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "PR Member", skills: ["International Outreach", "Global Networking", "Collaboration"], year: "2nd Year", role: "International relations", branch: "Design", bio: "Connects with UX communities globally." },

  // Design Team
  { name: "Nitin", team: "Design Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Design Lead", skills: ["UI/UX Design", "Design Systems", "Leadership"], year: "3rd Year", role: "Leads design team", branch: "Design", bio: "Visionary designer setting the creative direction for the club." },
  { name: "Archisha Nigam", team: "Design Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Design Co-Lead", skills: ["Visual Design", "Branding", "Identity"], year: "3rd Year", role: "Visual identity", branch: "Design", bio: "Creates stunning visual identities and brand guidelines." },
  { name: "Dhruv Thakwani", team: "Design Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Designer", skills: ["Motion Design", "Animation", "After Effects"], year: "2nd Year", role: "Motion graphics", branch: "Design", bio: "Brings designs to life with captivating animations." },
  { name: "Anvesha Shrivastav", team: "Design Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Designer", skills: ["Illustration", "Digital Art", "Character Design"], year: "2nd Year", role: "Illustration", branch: "Design", bio: "Creates beautiful illustrations that tell stories." },
  { name: "Mitaali Singh", team: "Design Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Designer", skills: ["Prototyping", "Figma", "Interaction Design"], year: "2nd Year", role: "Prototyping", branch: "Information Technology", bio: "Creates interactive prototypes that feel real." },
  { name: "Sharvil Kulkarni", team: "Design Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Designer", skills: ["Web Design", "Responsive Design", "CSS"], year: "2nd Year", role: "Web design", branch: "Computer Science", bio: "Designs beautiful and responsive web experiences." },
  { name: "Aaryan Kumar Verma", team: "Design Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Designer", skills: ["Mobile Design", "App UI", "iOS/Android"], year: "1st Year", role: "Mobile design", branch: "Computer Science", bio: "Designs intuitive mobile app interfaces." },
  { name: "Sakshi Dhananjay Bhosale", team: "Design Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Designer", skills: ["User Research", "Personas", "Journey Mapping"], year: "2nd Year", role: "User research", branch: "Design", bio: "Conducts research to understand user needs and behaviors." },
  { name: "Pranav Padmakar Kale", team: "Design Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Designer", skills: ["Typography", "Layout", "Print Design"], year: "2nd Year", role: "Typography", branch: "Design", bio: "Master of typography and layout design." },
  { name: "Shaurya Gupta", team: "Design Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Designer", skills: ["3D Design", "Blender", "Product Visualization"], year: "2nd Year", role: "3D design", branch: "Mechanical", bio: "Creates stunning 3D visualizations and product renders." },
  { name: "Nishkarsh Shrivastava", team: "Design Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Designer", skills: ["Icon Design", "Iconography", "Symbol Design"], year: "1st Year", role: "Icon design", branch: "Design", bio: "Creates consistent and meaningful icon sets." },
  { name: "Aayush", team: "Design Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Designer", skills: ["Poster Design", "Event Graphics", "Marketing"], year: "2nd Year", role: "Marketing design", branch: "Design", bio: "Designs eye-catching posters and marketing materials." },
  { name: "Ananya Vajpayee", team: "Design Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Designer", skills: ["Color Theory", "Palette Design", "Aesthetics"], year: "2nd Year", role: "Color specialist", branch: "Design", bio: "Expert in color theory and creating harmonious palettes." },
  { name: "Anush Karanapu", team: "Design Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Designer", skills: ["Dashboard Design", "Data Visualization", "Charts"], year: "2nd Year", role: "Data visualization", branch: "Computer Science", bio: "Transforms complex data into clear visualizations." },
  { name: "Pranjal Tiwari", team: "Design Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Designer", skills: ["Accessibility", "Inclusive Design", "A11y"], year: "2nd Year", role: "Accessibility design", branch: "Information Technology", bio: "Champions inclusive and accessible design practices." },
  { name: "Lavanya Pandit", team: "Design Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Designer", skills: ["Social Media Design", "Templates", "Content Graphics"], year: "1st Year", role: "Social media design", branch: "Design", bio: "Creates engaging social media graphics and templates." },
  { name: "Pradeepti Srivastava", team: "Design Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Designer", skills: ["Presentation Design", "Slides", "Pitch Decks"], year: "2nd Year", role: "Presentation design", branch: "Computer Science", bio: "Designs compelling presentations and pitch decks." },
  { name: "Ashika Maheshwari", team: "Design Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Designer", skills: ["Photo Editing", "Retouching", "Photoshop"], year: "2nd Year", role: "Photo editing", branch: "Design", bio: "Expert in photo editing and image manipulation." },

  // Social Media Team
  { name: "Veera", team: "Social Media Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Social Media Lead", skills: ["Social Strategy", "Content Planning", "Analytics"], year: "3rd Year", role: "Leads social media", branch: "Information Technology", bio: "Strategic mind behind the club's social media presence." },
  { name: "Shivansh", team: "Social Media Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Social Media Co-Lead", skills: ["Instagram", "Reels", "Visual Content"], year: "2nd Year", role: "Instagram management", branch: "Design", bio: "Creates viral Instagram content and engaging reels." },
  { name: "Shreyansh Sachan", team: "Social Media Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Social Media Member", skills: ["LinkedIn", "Professional Content", "Networking"], year: "2nd Year", role: "LinkedIn management", branch: "Computer Science", bio: "Builds the club's professional presence on LinkedIn." },
  { name: "Kunal Rajput", team: "Social Media Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg", designation: "Social Media Member", skills: ["Twitter/X", "Threads", "Real-time Updates"], year: "1st Year", role: "Twitter management", branch: "Computer Science", bio: "Keeps followers updated with real-time content." },
  { name: "Tuhin Rakshit", team: "Social Media Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg", designation: "Social Media Member", skills: ["YouTube", "Video Content", "Thumbnails"], year: "2nd Year", role: "YouTube management", branch: "Electronics", bio: "Manages the club's YouTube channel and video content." },
  { name: "Shagun Singh", team: "Social Media Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", designation: "Social Media Member", skills: ["Community Management", "Engagement", "Moderation"], year: "2nd Year", role: "Community management", branch: "Information Technology", bio: "Builds and engages with the online community." },
  { name: "Pola Eekshana", team: "Social Media Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", designation: "Social Media Member", skills: ["Analytics", "Insights", "Performance Tracking"], year: "2nd Year", role: "Social analytics", branch: "Computer Science", bio: "Analyzes social media performance and provides insights." },
];

function StudentDetailContent() {
  const searchParams = useSearchParams();
  const nameParam = searchParams?.get('name');
  
  // Find the student index based on the name parameter
  const initialIndex = nameParam 
    ? studentMembers.findIndex(s => s.name === decodeURIComponent(nameParam))
    : 0;
  
  const [current, setCurrent] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [scrollY, setScrollY] = useState(0);
  const student = studentMembers[current];

  // Update current when URL parameter changes
  useEffect(() => {
    if (nameParam) {
      const index = studentMembers.findIndex(s => s.name === decodeURIComponent(nameParam));
      if (index >= 0) setCurrent(index);
    }
  }, [nameParam]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollProgress = scrollTop / (documentHeight - windowHeight);
      setScrollY(scrollProgress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getClipPath = () => {
    const startReveal = 0.85;
    const progress = Math.max(0, (scrollY - startReveal) / (1 - startReveal));
    const clipValue = 100 - (Math.min(progress, 1) * 100);
    return `inset(${clipValue}% 0 0 0)`;
  };

  const prev = () => setCurrent((i) => (i === 0 ? studentMembers.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === studentMembers.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen w-full bg-black text-[#ECEAE5] font-[Neue]">
      <div className="w-full px-3.5 pt-15 pb-1">
        {/* Image Slider Section */}
        <div className="flex justify-center mb-8 relative">
          <div className="relative">
            <img
              src={student.img}
              alt={student.name}
              className="w-[375px] h-[375px] md:w-[625px] md:h-[625px] object-cover"
            />
            {/* Detail View button */}
            <div className="absolute bottom-4 right-4">
              <button className="border border-[#ECEAE5] bg-black text-[#ECEAE5] px-3 py-1 text-xs font-[Neue] hover:bg-[#ECEAE5] hover:text-black transition">
                (DETAIL VIEW)
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Controls - Below Image */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#ECEAE5]">{current + 1}/{studentMembers.length}</span>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="px-3 py-2 text-xl text-gray-300 border border-gray-400 rounded hover:bg-white hover:text-black transition"
                aria-label="Previous"
              >←</button>
              <button
                onClick={next}
                className="px-3 py-2 text-xl text-gray-300 border border-gray-400 rounded hover:bg-white hover:text-black transition"
                aria-label="Next"
              >→</button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full">
          {/* Title Row */}
          <div className="flex justify-between items-start mb-5">
            <div className="flex-1">
              <h1 className="hidden lg:block text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {student.name}
              </h1>
              <h1 className="lg:hidden text-xl font-semibold leading-tight">
                {student.name}
              </h1>
            </div>
            <div className="text-right">
              <h2 className="lg:hidden text-xl md:text-3xl font-semibold text-[#ECEAE5]">
                {student.team}
              </h2>
              <h2 className="hidden lg:block text-2xl md:text-3xl font-semibold text-[#ECEAE5]">
                {student.team}
              </h2>
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1px_1fr] gap-8 mb-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Bio in left side */}
              <div className="mb-8">
                <p className='text-xs mb-2'>( About )</p>
                <p className="hidden lg:block text-lg md:text-xl lg:text-2xl leading-relaxed font-semibold">
                  {student.bio}
                </p>
                <p className="lg:hidden text-sm leading-snug md:text-xl font-semibold">
                  {student.bio} 
                </p>
              </div>
              <div>
                <span className="hidden lg:block uppercase text-base font-[Neue] text-gray-300 font-semibold mb-2">(NAME)</span>
                <span className="lg:hidden uppercase text-xs font-[Neue] text-gray-300 font-semibold block mb-2">(NAME)</span>
                <motion.hr className="border-t border-[#ECEAE5] mb-4 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
                <div className="text-right">
                  <span className="hidden lg:block text-3xl md:text-4xl font-bold">{student.name}</span>
                  <span className="lg:hidden text-xl md:text-4xl font-bold">{student.name}</span>
                </div>
              </div>

              <div>
                <span className="hidden lg:block uppercase text-base font-[Neue] text-gray-300 font-semibold mb-2">(DESIGNATION)</span>
                <span className="lg:hidden uppercase text-xs font-[Neue] text-gray-300 font-semibold block mb-2">(DESIGNATION)</span>
                <motion.hr className="border-t border-[#ECEAE5] mb-4 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.3, ease: "easeInOut" }}
                />
                <div className="text-right">
                  <span className="hidden lg:block text-2xl md:text-3xl font-bold">{student.designation}</span>
                  <span className="lg:hidden text-xl md:text-3xl font-bold">{student.designation}</span>
                </div>
              </div>

              <div>
                <span className="hidden lg:block uppercase text-base font-[Neue] text-gray-300 font-semibold mb-2">(YEAR)</span>
                <span className="lg:hidden uppercase text-xs font-[Neue] text-gray-300 font-semibold block mb-2">(YEAR)</span>
                <motion.hr className="border-t border-[#ECEAE5] mb-4 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                />
                <div className="text-right">
                  <span className="hidden lg:block text-2xl md:text-3xl font-bold">{student.year}</span>
                  <span className="lg:hidden text-xl md:text-3xl font-bold">{student.year}</span>
                </div>
              </div>

              <div>
                <span className="hidden lg:block uppercase text-base font-[Neue] text-gray-300 font-semibold mb-2">(BRANCH)</span>
                <span className="lg:hidden uppercase text-xs font-[Neue] text-gray-300 font-semibold block mb-2">(BRANCH)</span>
                <motion.hr className="border-t border-[#ECEAE5] mb-4 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <div className="text-right">
                  <span className="hidden lg:block text-2xl md:text-3xl font-bold">{student.branch}</span>
                  <span className="lg:hidden text-xl md:text-3xl font-bold">{student.branch}</span>
                </div>
              </div>

              <div>
                <span className="hidden lg:block uppercase text-base font-[Neue] text-gray-300 font-semibold mb-2">(ROLE)</span>
                <span className="lg:hidden uppercase text-xs font-[Neue] text-gray-300 font-semibold block mb-2">(ROLE)</span>
                <motion.hr className="border-t border-[#ECEAE5] mb-4 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
                <div className="text-right">
                  <span className="hidden lg:block text-2xl md:text-3xl font-bold">{student.role}</span>
                  <span className="lg:hidden text-xl md:text-3xl font-bold">{student.role}</span>
                </div>
              </div>
            </div>

            {/* Center Column - Vertical Line */}
            <div className="hidden lg:flex justify-center">
              <div className="w-[1px] h-full bg-white" />
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="bg-white text-black px-4 py-4 flex justify-between items-center">
                <span className="font-mono text-sm font-bold">SKILLS</span>
                <span className="hidden lg:block text-lg font-bold">{student.skills[0]} ▼</span>
                <span className="lg:hidden text-base font-bold">{student.skills[0]} ▼</span>
              </div>
              
              <motion.button
                className="relative w-full overflow-hidden border border-[#ECEAE5] px-6 py-4 font-mono text-sm text-[#ECEAE5] bg-transparent"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* Sliding background */}
                <motion.div
                  className="absolute inset-0 bg-[#ECEAE5]"
                  variants={{
                    rest: { x: '-100%' },
                    hover: { x: '0%' },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                />
                {/* Button text */}
                <motion.span
                  className="relative z-10"
                  variants={{
                    rest: { color: '#ECEAE5' },
                    hover: { color: '#000000' },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  CONNECT WITH MEMBER
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      {/* <div 
        className="fixed bottom-0 left-0 w-full bg-[#0e0e0e] py-6 px-8 md:py-9 md:px-12 transition-all duration-700 ease-out"
        style={{
          clipPath: getClipPath(),
          transform: `translateY(${scrollY < 0.85 ? '100%' : '0'})`,
          opacity: scrollY < 0.85 ? 0 : 1
        }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto"> */}
          {/* Previous Section */}
          {/* <button 
            onClick={prev}
            className="flex items-center gap-4 md:gap-8 text-white hover:opacity-80 transition-opacity"
          >
            <span className="text-xl md:text-4xl font-light">Prev</span>
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-200">
              <img
                src={studentMembers[(current === 0 ? studentMembers.length - 1 : current - 1)].img}
                alt="Previous student"
                className="w-full h-full object-cover"
              />
            </div>
          </button> */}

          {/* Next Section */}
          {/* <button 
            onClick={next}
            className="flex items-center gap-4 md:gap-8 text-white hover:opacity-80 transition-opacity"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-200">
              <img
                src={studentMembers[(current === studentMembers.length - 1 ? 0 : current + 1)].img}
                alt="Next student"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl md:text-4xl font-light">Next</span>
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default function StudentDetail() {
  return (
    <Suspense fallback={
      <div className="min-h-screen w-full bg-black text-[#ECEAE5] font-[Neue] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#ECEAE5] mx-auto mb-4"></div>
          <p>Loading student details...</p>
        </div>
      </div>
    }>
      <StudentDetailContent />
    </Suspense>
  );
}