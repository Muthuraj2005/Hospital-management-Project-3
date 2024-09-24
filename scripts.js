const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb://localhost/hospital_management', { useNewUrlParser: true, useUnifiedTopology: true });

// Doctor Schema
const doctorSchema = new mongoose.Schema({
    doctor_id: String,
    name: String,
    age: Number,
    email: String,
    mobile: String,
    specialty: String,
    password: String
});

const Doctor = mongoose.model('Doctor', doctorSchema);

// Patient Schema
const patientSchema = new mongoose.Schema({
    patient_id: String,
    name: String,
    age: Number,
    email: String,
    mobile: String,
    password: String
});

const Patient = mongoose.model('Patient', patientSchema);

// Route to render Add Doctor page
app.get('/add_doctor', (req, res) => {
    res.sendFile(__dirname + '/add_doctor.html');
});

// Route to handle Add Doctor form submission
app.post('/add_doctor', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newDoctor = new Doctor({
            doctor_id: req.body.doctor_id,
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            mobile: req.body.mobile,
            specialty: req.body.specialty,
            password: hashedPassword
        });

        await newDoctor.save();
        res.redirect('/admin_dashboard.html');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to render Create Patient page
app.get('/create_patient', (req, res) => {
    res.sendFile(__dirname + '/create_patient.html');
});

// Route to handle Create Patient form submission
app.post('/create_patient', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newPatient = new Patient({
            patient_id: req.body.patient_id,
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            mobile: req.body.mobile,
            password: hashedPassword
        });

        await newPatient.save();
        res.redirect('/admin_dashboard.html');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
