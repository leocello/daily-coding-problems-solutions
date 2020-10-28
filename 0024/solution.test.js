const {TreeNode} = require('./solution');

it('Problem #24 - Binary tree locking', function () {
    const tree =
        new TreeNode(
            1,
            new TreeNode(
                2,
                new TreeNode(
                    4,
                    new TreeNode(
                        8
                    ),
                    new TreeNode(
                        9
                    )
                ),
                new TreeNode(
                    5,
                    new TreeNode(
                        10
                    ),
                    new TreeNode(
                        11
                    )
                )
            ),
            new TreeNode(
                3,
                new TreeNode(
                    6,
                    new TreeNode(
                        12
                    ),
                    new TreeNode(
                        13
                    )
                ),
                new TreeNode(
                    7,
                    new TreeNode(
                        14
                    ),
                    new TreeNode(
                        15
                    )
                )
            )
        );

    expect(tree.left.lock()).toBe(true);
    expect(tree.left.lock()).toBe(false);
    expect(tree.left.unlock()).toBe(true);
    expect(tree.left.left.lock()).toBe(true);
    expect(tree.left.lock()).toBe(false);
    expect(tree.right.lock()).toBe(true);
    expect(tree.right.left.lock()).toBe(false);
    expect(tree.lock()).toBe(false);
    expect(tree.left.left.unlock()).toBe(true);
    expect(tree.right.unlock()).toBe(true);
    expect(tree.lock()).toBe(true);
    expect(tree.right.lock()).toBe(false);
});