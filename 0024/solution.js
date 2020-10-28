class TreeNode
{
    constructor(val, left, right)
    {
        this.val = val;

        this.parent = null;
        this.left = !!left ? left : null;
        this.right = !!right ? right : null;
        
        this.locked = false;

        if (!!this.left) {
            this.left.parent = this;
        }

        if (!!this.right) {
            this.right.parent = this;
        }
    }

    can_update(direction, excluded = false)
    {
        if (this.is_locked() && !excluded) {
            throw "already locked";
        }

        if (!!this.left && direction.includes('d')) {
            this.left.can_update('d');
        }
        
        if (!!this.right && direction.includes('d')) {
            this.right.can_update('d');
        }

        if (!!this.parent && direction.includes('u')) {
            this.parent.can_update('u');
        }
    }

    is_locked()
    {
        return this.locked;
    }

    lock()
    {
        if (this.is_locked()) {
            return false;
        }

        try {
            this.can_update('ud', true);
            this.locked = true;

            return true;
        } catch (ex) {
            return false;
        }
    }

    unlock()
    {
        if (!this.is_locked()) {
            return false;
        }

        try {
            this.can_update('ud', true);
            this.locked = false;

            return true;
        } catch (ex) {
            return false;
        }
    }
}

module.exports = {
    TreeNode,
};