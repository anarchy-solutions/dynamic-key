module.exports = (req, res) => {
    const key = Math.random().toString(36).substring(2, 10);
    res.setHeader("Cache-Control", "no-store"); 
    res.status(200).json({ key }); 
};
