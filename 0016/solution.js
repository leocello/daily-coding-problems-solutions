class Log
{
    constructor (n) {
        this.n = n;
        this.records = [];
    }

    record (order_id)
    {
        this.records.push(order_id);

        if (this.records.length > this.n) {
            this.records.splice(0,1);
        }
    }

    get_last (i)
    {
        if (i > this.n) {
            throw "Overflow";
        }

        return this.records[this.records.length - i];
    }
}

module.exports = {
    Log,
};
