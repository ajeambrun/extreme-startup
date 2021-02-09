import unittest

from extreme_startup import answer


class ExtremeStartupTest(unittest.TestCase):
    def test_addition(self):
        result = answer("what is the sum of 14 and 4")
        self.assertEqual("18", result)


if __name__ == '__main__':
    unittest.main()
