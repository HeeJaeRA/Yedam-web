module.exports = {
	customerList: `SELECT * FROM customers`,
	customerInfo: `SELECT * FROM customers WHERE id = ?`,
	customerInsert: `INSERT INTO customers SET ?`,
	customerUpdate: `UPDATE customers SET ? WHERE id = ?`,
	customerDelete: `DELETE FROM customers WHERE id = ?`,
};
