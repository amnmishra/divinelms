import Country from '../models/Country.js';

// Create Country
export const addCountry = async (req, res) => {
    try {
        const { countryCode, countryName, countryShortName } = req.body;
        const newCountry = new Country({
            countryCode, countryName, countryShortName
        });
        await newCountry.save();
        res.status(201).json({ message: 'Successfully Added', Country: newCountry });
    } catch (err) {
        res.status(500).json({ error: 'Failed...', details: err.message });
    }
};

// Update Country
export const updateCountry = async (req, res) => {
    try {
        const { id } = req.params;
        const { countryCode, countryName, countryShortName } = req.body;
        const updatedCountry = await Country.findByIdAndUpdate(
            id,
            { countryCode, countryName, countryShortName },
            { new: true, runValidators: true }
        );
        if (!updatedCountry) {
            return res.status(404).json({ error: 'Country not found' });
        }
        res.status(200).json({ message: 'Successfully Updated', Country: updatedCountry });
    } catch (err) {
        res.status(500).json({ error: 'Update failed', details: err.message });
    }
};

// Get All Countries
export const allCountry = async (req, res) => {
    try {
        const countries = await Country.find({ isDeleted: { $ne: true } }); // exclude deleted ones
        res.status(200).json(countries);
    } catch (err) {
        res.status(500).json({ error: 'Failed', details: err.message });
    }
};

// Get Country by ID
export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const country = await Country.findById(id);
        if (!country || country.isDeleted) {
            return res.status(404).json({ error: 'Country not found' });
        }
        res.status(200).json(country);
    } catch (err) {
        res.status(500).json({ error: 'Failed', details: err.message });
    }
};

// Set isActive (Publicly View Country)
export const isActive = async (req, res) => {
    try {
        const { id } = req.params;
        const { active } = req.body;
        return res.status(404).json({ active });
        const country = await Country.findByIdAndUpdate(id, { isActive: active }, { new: true });
        // return res.status(404).json({ country });
        if (!country) {
            return res.status(404).json({ error: 'Country not found' });
        }
        res.status(200).json({ message: 'isActive updated', Country: country });
    } catch (err) {
        res.status(500).json({ error: 'Failed', details: err.message });
    }
};

// Temp Deleted (soft delete)
export const isDeleted = async (req, res) => {
    try {
        const { id } = req.params;
        const { deleted } = req.body; // true or false
        const country = await Country.findByIdAndUpdate(id, { isDeleted: deleted }, { new: true });
        if (!country) {
            return res.status(404).json({ error: 'Country not found' });
        }
        res.status(200).json({ message: 'isDeleted updated', Country: country });
    } catch (err) {
        res.status(500).json({ error: 'Failed', details: err.message });
    }
};

// Permanent Delete
export const trash = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Country.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ error: 'Country not found' });
        }
        res.status(200).json({ message: 'Permanently Deleted', Country: deleted });
    } catch (err) {
        res.status(500).json({ error: 'Failed', details: err.message });
    }
};
