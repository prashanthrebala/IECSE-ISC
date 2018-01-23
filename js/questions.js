
var le = '&le;', ge = '&ge;', lt = '&#60;', gt = '&#62;';

var questionStatements = {

	 1: "Given three integers <b>a</b>, <b>b</b> and <b>c</b>, find the index of the <b>k<sup>th</sup></b> occurrence of <b>c</b> in <b>a / b</b> after the decimal point.<br> If it does not exists, print -1.<h4>Input Format:</h4>The only input line contains four space separated integers <b>a, b, c, k</b><h4>Output Format: </h4>Contains one integer which is the <b>k<sup>th</sup></b> occurrence of <b>c</b> in <b>a / b</b><h4>Sample Input:</h4><code>12 11 0 3 </code><h4>Sample Output: </h4><code>5</code><h4>Explanation</h4><code>12 / 11 = 1.09090909....</code><br>The 3rd occurrence of 0 occurs at position 5 after the decimal point.<h4>Test Case:</h4><code>22 7 8 3</code>",
	 2: "Given a list of unsorted integers, <b>A= {a<sub>1</sub>,a<sub>2</sub>,a<sub>3</sub>,...,a<sub>N</sub>} </b>can you find the pair of elements that have the smallest absolute difference between them? If there are multiple pairs, find them all.<h4>Input Format</h4> The first line of input contains a single integer,<b>N</b>, representing the length of array <b>A</b>.<br> In the second line, there are <b>N</b> space-separated integers, <b>a<sub>1</sub>,a<sub>2</sub>,a<sub>3</sub>,...,a<sub>N</sub></b> , representing the elements of array <b>A</b>.<h4>Output Format</h4> Output the pairs of elements with the smallest difference.<br>If there are multiple pairs, output all of them in ascending order, all on the same line (consecutively) with just a single space between each pair of numbers.<br>If there's a number which lies in two pair, print it two times (see example 3 for an explanation).<h4>Sample Input 1</h4><code>10<br>-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854<br></code><h4>Sample Output 1</h4> <code>-20 30</code><h4>Explanation</h4>(30) - (-20) = 50, which is the smallest difference<br><h4>Sample Input 2</h4><code>12<br>-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854 -520 -470 <br></code><h4>Sample Output 2</h4> <code>-520 -470 -20 30<br></code><h4>Explanation</h4>(-470) - (-520) = 30 - (-20) = 50, which is the smallest difference.<h4>Sample Input 3</h4><code>4<br>5 4 3 2</code><h4>Sample Output 3</h4> <code>2 3 3 4 4 5</code><h4>Explanation</h4>Here, the minimum difference will be 1. So valid pairs are (2, 3), (3, 4), and (4, 5). So we have to print 2 once, 3 and 4 twice each, and 5 once.<h4>Test Case:</h4><code>10<br>-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854</code>",
	 3: "Ram wants to go to DeeTee with Sparsh on some day <b>x</b>, such that <b>i &le; x &le; j</b>, but he knows Sparsh only goes to DeeTee on days he considers to be beautiful.<br>He considers a day to be beautiful if the absolute value of the difference between <b>x</b> and <b>reversed(x)</b> is evenly divisible by some given number <b>k</b>.<br>Help Ram figure out how many days he'll be willing to go, given the values of <b>i</b>, <b>j</b> and <b>k</b>.<br><h4>Input Format:</h4><code>i j k</code><h4>Output Format</h4>Number of days (eg.1,2,3,etc.)<h4>Sample Input</h4><code>20 23 6<br></code><h4>Sample Output</h4><code>2</code><h4>Explanation:</h4>Day 20 is beautiful because the following evaluates to a whole number: <sup> |20-02|</sup>&frasl;<sub> 6</sub> = 3<br>Day 21 is not beautiful because the following doesn't evaluate to a whole number: <sup> |21-12| </sup>&frasl;<sub> 6</sub>= 1.5<br>Day 22 is beautiful because the following evaluates to a whole number: <sup> |22-22| </sup>&frasl;<sub> 6</sub>= 0<br>Day 23 is not beautiful because the following doesn't evaluate to a whole number:<sup> |23-32| </sup>&frasl;<sub> 6</sub> = 1.5<br><br>Thus the 20th and 22nd days are beautiful, giving the answer 2 days.<h4>Test Case: </h4><code>949488 1753821 5005440</code>",
	 4: "Write the first <b>n</b> numbers of the Stern-Brocot Series explained below<br><ol>	<li>First and second element of the sequence is 1 and 1.</li>	<li>Consider the second member of the sequence . Then, sum the considered member of the sequence and it's precedent i.e (1 + 1 = 2) . Now 2 is the next element of our series. Sequence will be [ 1, 1, 2 ]</li>	<li>After this element, our next element of the sequence will be the considered element of our second step. Now the sequence will be [ 1, 1, 2, 1 ]</li>	<li>Again we do the step 2, but now the considered element will be 2 (3rd element). So, next number of sequence will be sum of considered number and it's precedent (2 + 1 = 3). Sequence will be now [ 1, 1, 2, 1, 3 ]</li>	<li>Like step 3, the next element will be the considered element i.e 2. Thus sequence will be [ 1, 1, 2, 1, 3, 2 ]</li>	<li>Hence this process continues, now next considered element will be 1 (4th element)</li></ol><h4>Input Format</h4>A single integer <b>n</b> specifying the number of digits of the series to be displayed<h4>Output Format</h4>First <b>n</b> space separated integers of the Stern-Brocot series<h4>Sample Input</h4><code>6</code><h4>Sample Output</h4><code>1 1 2 1 3 2</code><h4>Test Case</h4><code>15</code>",
	 5: "Run-length encoding (RLE) is a very simple form of lossless data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. If a character appears once, no. of appearances shouldn't be mentioned. No input with integers would be tested.<h4> Input Format </h4>A string consisting of only capital english alphabets <br><h4> Output Format </h4>The run length encoding format of input string <br><h4> Sample Input </h4><code>WWWBWWWERRR <br></code><h4> Sample Output </h4><code>W6BER3</code><h4> Test Case </h4><code>CBNIHREEDWZFOHBVXLLIEXUFSPBKIUWKLZVVZCCI</code>",
	 6: " Given two numbers, the task is to use alternative bits within two numbers to create result.<br> We take first bits of second number, then second bit of the first number, third bit of second number and take the fourth bit of a first number and so on and generate  a number with it.<br><h4>Input Format</h4>Only line of input consists of a single line containing two integers seperated by a single space. <b>N</b> and <b>M</b> <br><h4>Output Format</h4>Output a single line containing a single integer, the answer. <br><h4> Sample Input </h4><code> 20 7 </code> <br><h4>Sample Output</h4><code> 5 </code><br><h4> Explanation </h4>n = 20, m = 7 <br>Start from right of second number<br>binary representation of n = <code>1 0 1 0 0</code> <br>binary representation of m = <code>0 0 1 1 1</code> <br>Result: <code>0 0 1 0 1</code>  <br><h4>Test Case</h4><code> 26789654 17298456 </code><br>",
	 7: " <b> N </b> number of friends wish to buy <b> N </b> new cars. All of them have a different budget range. It is assumed that each model of car retails at an integer price and no two models can have the same price. The friends want to buy the cars in such a way that there is minimum variation between them. In other words they want to select a minimum number of models such that all of the <b> N </b> friends have at least one model that fits his/her budget.Given the individual budget range of <b> N </b> friends <b> [a, b] </b>, where a and b are both included, you need to determine the minimum number of models that should be selected.<h4> Input Format </h4>Integer <b> N </b>, number of friends followed by <b>N</b> lines with budget of one friend in each line.<br> The first integer of the budget range is guaranteed to be lesser than or equal to the second integer.<h4> Output Format </h4>Minimum number of models to be bought. <br><h4> Sample Input 1</h4><code>3 <br>5 8 <br>9 12 <br>8 8 <br></code><h4> Sample Output 1</h4><code>2 </code><h4> Sample Input 2</h4><code>4 <br>17 20 <br>11 11 <br>13 15 <br>10 12 <br></code><h4> Sample Output 2</h4><code>3 </code><h4> Explanation </h4>Test Case 1:<br>No. of friends = 3<br>Budget of friend 1 = 5, 6, 7, 8<br>Budget of friend 2 = 9, 10, 11, 12<br>Budget of friend 3 = 8<br>Possible set of minimum number of models that can be selected = (8, 9), (8, 10), (8, 11), (8, 12)<br><br><br>Test Case 2:<br>No. of friends = 4<br>Budget of friend 1 = 17, 18, 19, 20<br>Budget of friend 2 = 11<br>Budget of friend 3 = 13, 14, 15<br>Budget of friend 4 = 10, 11, 12<br>Possible set of minimum number of models that can be selected = (15, 11, 19), (14, 11, 18), (15, 11, 18) etc.<h4>Test Case</h4><code>26<br>2 5<br>1 4<br>3 5<br>12 18<br>6 9<br>3 6<br>19 20<br>2 7<br>7 13<br>12 14<br>11 19<br>7 14<br>0 3<br>17 19<br>5 9<br>4 5<br>6 10<br>1 3<br>8 12<br>13 19<br>23 45<br>12 56<br>33 44<br>32 39<br>27 30<br>44 50<br></code>",
	 8: "Find the greatest product of <b>K</b> consecutive digits in the <b>N</b> digit number.<br><h4>Input Format</h4>First line will contain two integers N & K . <br>Second line will contain an N-digit integer.<br><h4>Output Format</h4>Print the required answer in a seperate line.<br><h4>Sample Input</h4><code>10 5<br>2709360626</code><br><h4>Sample Output</h4><code>0</code><h4>Explanation</h4>For 2709360626, 0 lies in all selection of 5 consecutive digits hence maximum product remains 0.<br><h4>Test Case</h4><code>19 5<br>3675356291112321821</code>",
	 9: "Srinjoy is really bored. He came up with an infinite sequence of zeroes and ones. The sequence can be incrementally constructed as follows:<br><ul><li>Begin by writing down a 0, then follow the next two steps forever</li><li>Copy the entire sequence, swap all the 1's with 0's, and 0's with 1's.</li><li> Append the copied sequence to the current one.</li></ul><br>The first few cases would look like:<br><br><code><center>0, 01, 0110, 01101001, 0110100110010110, etc.</center></code><br> The positions in the sequence are numbered sequentially, starting from zero (0 based indexing). <br>To impress Srinjoy, you want to write a program which can quickly answer any questions of the following type: \"How many ones are in Srinjoy's sequence at <b>positions</b> from L to R, inclusive?\"<br>You are given the longs L and R. Return the total number of ones whose positions lie in the interval [L,R].<br><h4>Input Format</h4>L<br>R<br><h4>Output Format </h4>Number of 1's in range <br><h4>Sample Input 1:</h4><code>5<br>15<br></code><h4>Sample Output 1:</h4><code>5</code><h4>Explanation</h4>The [5, 15] place covers the digits <code>01101<b><i>00110010110</i></b>1001011001101001</code> <br>This subsequence contains 5 ones, so the correct answer is 5.<br><h4>Sample Input 2:</h4><code>20<br>30</code><h4>Sample Output 2:</h4><code>6</code><h4>Explanation</h4>The [20,30] digits in the sequence are <code>01101001100101101001<b><i>01100110100</i></b>1</code><br>The subsequence contains 5 one's, so the answer is 5.<br><h4>Test Case:</h4><code>5192834871235435<br>954971273487212547<br></code>",
	10: "A top secret message containing letters from A-Z is being encoded to numbers using the following mapping:<br><code>'A' -> 1<br>'B' -> 2<br>.<br>.<br>.<br>'Z' -> 26<br></code>You are an FBI agent. You have to determine the total number of ways that message can be decoded.<br>For example, given encoded message \"123\",  it could be decoded as \"ABC\" (1 2 3) or \"LC\" (12 3) or \"AW\"(1 23).<br>So total ways are 3.<br><h4>Input Format</h4>Only line of input consists of a single line containing one integer <b>N</b> <br><h4>Output Format</h4>Output a single line containing a single integer, the answer. <br><h4> Sample Input </h4><code>2563</code> <br><h4>Sample Output</h4><code> 2 </code><br><h4>Test Case</h4><code>127874698547882647181526378153627832</code>",
	11: "Given a positive number <b>x</b>, print all Jumping Numbers smaller than or equal to <b>x</b>.<br> A number is called as a Jumping Number if all adjacent digits in it differ by 1. The difference between '9' and '0' is not considered as 1. All single digit numbers are considered as Jumping Numbers.<br> For example 7, 8987 and 4343456 are Jumping numbers but 796 and 89098 are not.<br><h4>Input Format</h4>Only line of input consists of a single line containing one integer <b>x</b> <br><h4>Output Format</h4>Output a single line containing all the jumping numbers less than <b>x</b> are generated in increasing order of the most significant digit, seperated by a single space.<br><h4> Sample Input </h4><code>50</code> <br><h4>Sample Output</h4><code> 0 1 10 12 2 21 23 3 32 34 4 43 45 5 6 7 8 9 </code><br><h4>Test Case</h4><code>89776</code>",
	12: "Arav is obsessed with palindromic numbers.<br> He finds the palindromic number 595 especially interesting because it can be written as the sum of consecutive squares: <br> <b>6<sup>2</sup> + 7<sup>2</sup> + 8<sup>2</sup> +...+ 12</b>.<br>The palindromic number 696 is also nice to Arav because it can be written as <b>10<sup>2</sup> + 12<sup>2</sup> + 14<sup>2</sup> + 16<sup>2</sup></b>, where the bases form an arithmetic progression with common difference 2.<br>Arav knows there are exactly eleven palindromes below one-thousand that can be written as consecutive square sums, and the sum of these palindromes is <b>4164</b> . Note that <b>1 = 0<sup>2</sup> + 1<sup>2</sup></b> has not been included as this problem is concerned with the squares of positive integers. Also, there has to be at least two terms in the sum.<br>Given <b>N</b> and <b>d</b> , your task is to help Arav find the sum of all the numbers less than <b>N</b> that are both palindromic and can be written as the sum of squares whose bases form an arithmetic progression with common difference <b>d</b>.</p><h4>Input Format</h4>Only line of input consists of a single line containing two integers <b>N</b> and <b>d</b>, separated by a space.<h4>Output Format</h4>Output a single line containing a single integer, the answer.<h4> Sample Input </h4><code>1000 1</code> <br><h4>Sample Output</h4><code>4164</code><br><h4>Test Case</h4><code>1000 2</code><br>",
	13: "We define <b> P </b> to be a permutation of the first <b> N </b> natural numbers in the range <b> [1, N] </b>. Let pos<sub>i</sub> denote the position of <b> i </b> in permutation (please use 1-based indexing).<br><b> P </b> is considered to be an absolute permutation if <b> abs(pos<sub>i</sub> - i == K) </b> holds true for every <b> i &epsilon; [1, N]. </b><br>Given <b> N </b> and <b> K </b>, print the lexicographically smallest absolute permutation, <b> P </b>; if no absolute permutation exists, print -1.<br><h4>Input Format</h4>There's only one line of input containing two integers <b> N </b> and <b> K </b>.<h4>Output Format</h4>Print the lexicographically smallest absolute permutation; if no absolute permutation exists, print -1.<h4>Sample Input 1</h4><code>2 1<br></code><h4>Sample Output 1</h4><code>2 1<br></code><h4>Sample Input 2</h4><code>3 0<br></code><h4>Sample Output 2</h4><code>1 2 3<br></code><br><h4> Explanation </h4><h5>Test Case 1:</h5><pre>Position:    1 2<br>Permutation: 2 1<br>Difference:  1 1</pre><h5>Test Case 2:</h5><pre>Position:    1 2 3<br>Permutation: 1 2 3<br>Difference:  0 0</pre><h4>Test Case</h4><code>702 27<br></code>",
	14: "Arav likes magic numbers. He always tries to find them.</br>A number <b>x</b>, is called magic when adding x to x+1  requires a carry operation. For example 5, 17, 91 are magic numbers because adding them to 6, 18, 92 (respectively) requires a carry operation.<ul><li>In 5 + (5 + 1) = 5 + 6 = 11 a 1 is carried over into 10s place.<li>In 17 + (17 + 1) = 17 + 18 = 35 a 2 is carried over into 10s place<li>In 91 + (91 + 1) = 91 + 92 = 183 a 1 is carried over into 100s place</ul>You have two integers <b>x</b> and <b>n</b>. Construct a new number, S, by repeating <b>x</b> a total of <b>n</b> times. Given x and n help arav construct S and find all the magic numbers between 1 and S . Then print the number of magic numbers in the aforementioned range; as this number can be quite large, your answer must be modulo 10<sup>9</sup> + 7.<br><h4>Input Format</h4>A single line with two space-separated integers denoting the respective values of x and n .<h4>Output Format</h4>Print a single integer denoting the number of irresponsible numbers between 1 and S , modulo 10<sup>9</sup> + 7.<h4>Sample Input</h4><code>1 2</code><h4>Sample Output</h4><code>4</code><h4>Explanation</h4>When we repeat x = 1 a total of 2 times we get 11 . The magic numbers between 1 and 11 are 5, 6, 7 and 8. Because there are four magic numbers, we print 4 % 10<sup>9</sup> + 7 on a new line.<h4>Testcase</h4><code>8 20</code>",
	15: "<p>The kingdom of Gridland contains P provinces. Each province is defined as a 2 x N grid where each cell in the grid represents a city. Every cell in the grid contains a single lowercase character denoting the first character of the city name corresponding to that cell.</p><p>From a city with the coordinates (i,j), it is possible to move to any of the following cells in 1 unit time(provided that the destination cell is within the confines of the grid):</p><ul><li>(i-1, j)</li><li>(i+1, j)</li><li>(i, j-1)</li><li>(i, j+1)</li></ul><p>A knight wants to visit all the cities in Gridland. He can start his journey in any city and immediately stops his journey after having visited each city at least once. Moreover, he always plans his journey in such a way that the total time required to complete it is minimum</p><p>After completing the tour of each province, the knight forms a string by concatenating the characters of all the cells in his path. How many distinct strings can he form in each province?</p><h4>Input Format</h4><p>The first line contains a single integer, P, denoting the number of provinces. The 3P subsequent lines describe each province over the following three lines:<br>The first line contains an integer, N, denoting the number of columns in the province.<br>Each of the next two lines contains a string, S, of length N denoting the characters for the first and second row of the province.</p><h4>Output Format</h4><p>Output a single line containing the number of distict strings the knight can form for each province separated by space</p><h4>Sample Input</h4><code>3<br>1<br>a<br>a<br>3<br>dab<br>abd<br>5<br>ababa<br>babab<br></code><h4>Sample Output</h4><code>1 8 2</code><h4>TestCase:</h4><code>15<br>471<br>abcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghi<br>bcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghij<br>475<br>cccdddcccdccdcccdcddcdccdddcdccccddcdcdccccddccddccccdcddcccdcccccdddddcccccddddddcccddccdccdddddccddcdcdcddddcccdcdccdddcdcdccdcccddcdccdcddddcdccddcddccddcddddcdccdddddcdcccccdccddccddccdddcccdcddccdcdddccdcddccccccdcdcccdcccdcccdcdddcdcdcdccccddcccddccddddcdcdcccdcccccccdcddddcccdddcdcccddddcccdddccdcdccddccddcdcdddcccddccddcccddddcdcddccddcddccccdddddccdccddcdccdcccdccccdcdddddddcdddcccccdcddccdcdcdcddcdcdcccddcdcdcccddddcccdccccccdcccdccddcdcddddddcddcccddddccdddccc<br>ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc<br>495<br>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>432<br>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>459<br>ijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijkl<br>jklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklmijklm<br>476<br>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>aaaabaaaaaaabbababaabaababbbabaaabbabaabbaaaaabababbbbaaaabbabaabbaabbabbaaabbbbbbabbbabbbabbbbabbbbabbbababbaabbaababbabbaababbbbbaaabbaabbaaabbbbbabbbabbaaaaababbbaabbbaaaaabbbabbbababaabbbbaabaabaababbaaababaabaabbbaaaabbabaabbbbabbabababbaaabbbaabaaaaabbaabbbabbbaaabaabbbaabbbbbbbbaabababbbabbbbababbaababbaaababbaaaaabbbbaabbbaaabbabaabbbabbbaabbaaabbabaaababbbabbbaaaaaabaaaabbaabaabaaabaabbbabbbababbabbabbaaaabaaabaaabbabbaaabbababbbaaabbabbbbbaabbbaabbbaaabbbbbbbbba<br>456<br>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>aaacccdaddbcdbcbabdcbcaaadcdaaccdbbcbccbdbdbbaacbacdbdcbbdacdaaabdadcbddcaadbcbdaabaabccaadbababbabacbdacdcddbabbabbbcbacbbadccddcacabbcbcacaacdaaacaaccccbabddbaacdabbacbdcddbbcaaabdbaadaabbbdcdcbdcddbaacadddcbdcbbcdbbaadcccdcadacdbdaacdddcabbadaccdddaaabbdabbddcacaccbdbbadadddababbaccdaaaaaaaddaacdbdcadacbbdaaddabdbddadbddccdbbbadabadbcacccdbccccdbccdacbaacdccbdacdddbabcddabcdacbccdbbbcacadbcbbbdabbdcccdcaababdcadbbdaccdacacddddaadbdddcdadbbadbddbaccc<br>471<br>baababababbbbbabbbbabbbaabbbbbbabbababbbbbbbaabbbabaaaabbabaabaabaaaabbaaabbbababbabbbbbaaabbabababaaababaabaababaaabbaaabbabaaaaaaabaabbabaababaabbabaabbaaabaabbbaabaabbabababbababbabbabaababaaabbbaabbaaaaabaaaaaaabbababbaabaaaaaabbabbababbbaabaaaaaabbbaaababbaababbbbbbbbbaabbbbbaaaaabbabaababbbbabaababaabbbbaabbbbaababaabbabaaabbaabbbbbbaabbbbaabbbabbbabbababbaaaabbbabaabaaabababbaaaaaabbaaaabbbaaabaabbabbbbaaaabbabbaaaabbabbbbaabbabbabbbbaabbaaaaaababaaaabbaabbaab<br>bbcbccbbbbcbccbbccbbcbccccccbccccbcbbbbbccbbbcbccccbcccbccbcccbbcccbccccbcbbbcbccbbbcbbbbcbccccccbcbbbbbbcbcccbbccbcccbcccbbbccbbcbcccccbbccccccbbbccbbcbccccbbcbccbbbbbbbcbccbccbbbbbcbcbcbbbbcbbbcbbcbccbccbccbbbbcbcbccccccccbbbbbbcbbbccbcbccbccbbbbcbcbcbccccbbbbcbccbbcbbccbbccbcbcccbcbbcccbbcccbbcbbbbccbcccccccbcbbccccbbbbccbcbbbbcbcbcbbcccbcbccbbcbbccbbbbcbcbbccbbcccbcccbbccbcbccccbccbbbcccbcbbbbcbbbcbbcbccbcbccccbbcccbbcbbbcccbbbcbcccbbccbccbccccccbbbbccccbcccbbccb<br>412<br>ijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijkijki<br>jklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmnoijklmno<br>436<br>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>495<br>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaa<br>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaacacabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>414<br>ababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab<br>bababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa<br>500<br>rstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrs<br>strstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrstrst<br>500<br>abababbbabbaaaaabababbbbbbbabaaaaaaaaaababbabbbbababaabbbbaabbbbbaababbaaaaabababbbabbbbaaababbbbbbaaaaabababbaaaababbbaababbaaababababbbbabbbaabbbbaaaabaaaaabaabaabbbbbbbabbaaabbbaabbabbbbaaaaabaabbbbabbbbbaaabaaaabbbaabaaababababababbabaaaabaabbabbbabaabaaabbabaaababbbbaaabbbaabbaabbaaaaaaababbaaaaaaabababaaabaaabaabbbabaabaabaaabbbbbababaabaaaabbabbbaabaababbbbbaaaabababbbabaaaabababbbbbbabbabaabaababbaaabbabaaaaababbbaaabababaaabaaabaaabaaaabbaaabbbbaaaaaabaaabababbbaaaaabbbababaabbbbaabbaab<br>bcccbbcbacaabacbbcbccacbcaacacacbbbabbabacabccaacbaabbbcccabcaabaabcacaaacccabacabbbbacaabaccbbccbaabacbabcacababcacbacbaaccacaccabcbccabacbbbbacaabbcaacbbcaacacbacbaccacabbbacccbaaaccbaababcabcbbacabcaaabaaabbacbbcccbaacbaacacccaaacccbcaaabcaabaccbaabbaabaaacbaacabbbbbbcbbbbacaaaabaaacbabbbcaaaccaccbcbabcbbccaabcbbacbbbabbbacaacbbaabcbccabcacccbccbbcccabcbbccaacbaababbbcbabccbbcbcccbacbabcacabbbbbcbccbbcaabacacaabaaaaabbaaabccaaabbbacbbbbbbcaaaaabaacaaaaaabcccabccabcaacbccbbcabaccccbabbacccaacc<br>500<br>ghghghgghhghhhhhhhhghhhggggghhgghhhhhghghhhhghghhghghghghgghgghggghhghghhhgghgghhgggghhhhhggghgghgghhghhgghhghghhhggggghhhhghghgghhghhhghhhhhggghggghghghghhhhghgggghghggghhgghhghghghgghgghghggghhhhghgghhhgghghghgghhgghhhghghghhggggghhhhgghhhggghhhhhhhgghgghhhgghhghhhhgggggghhhghhghgghggghhhhhhhhghgghhhgggghhghghhghhghgghghgghgghhhgghgggghhhhhhhggghgghhggghghhggghhhgghhhghgghghhhhhghghgggghgggggghhhghghghghhhhhgghghghgggghghhggggghghgggghgghggggghgggggghhhhhghhhggghghggghhhgghhghhgghggggghggggghh<br>hghggihhggiiigggigiiiiihhhggghhihhhghghigigigihgiiggghigiihghggighghhiggiggiihhgihhgiighgihhggiihhgggghhhhhigghghhghggghigggihhiiiihiihgigggiihgiighggghhgiggighhiiighiiggiiihhhghiihhighhhgiiihhiihgigigigihiggighghhggiighghigiiiiihihhgghihhhhhghhhihihggiiihggigggiigiggiggihgghhgggghghgiighgggihihiiiihihiihhhhgihiiggiggiihhihigihhghighhghhigiihihihiihhhghihhgghhhhihihihihihhihighigiiggiigihihiggiiihhhgigiggighhhihihghiiigiiihghhgigighgiighigghgghihhihiigighhiigihhhghiihghghghgihighggiigggigiihiggi<br></code>"

};

var questions = 

	{

		1 : {

			'penalties': 0,
			'solved' : false,
			'attempted' : false,
			'score' : 300,
			'answer' : "b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9",
			'scored' : 0

		},

		2 : {

			'penalties': 0,
			'solved' : false,
			'attempted' : false,
			'score' : 300,
			'answer' : "ffc3ab9bbd061c65a62c581365b3d3771400c60dfe110cf0e39e70cab3e2a86b",
			'scored' : 0

		},

		3 : {

			'penalties': 0,
			'solved' : false,
			'attempted' : false,
			'score' : 500,
			'answer' : "d1c78c9aa5dcb0991f46b25fbaaa359d7d5823ac7a2a94c4d4a31da42a26c24f",
			'scored' : 0

		},

		4 : {

			'penalties': 0,
			'solved' : false,
			'attempted' : false,
			'score' : 500,
			'answer' : "defaf960345a9fb69252cc35f240119ee50c1ee04ef34723f1120e86b7a94dce",
			'scored' : 0

		},

		5 : {

			'penalties': 0,
			'solved' : false,
			'attempted' : false,
			'score' : 500,
			'answer' : "caf7157687a2118497cf1e2d59fe1f2ad1fb2080befbf2e857a501a6a2c668a8",
			'scored' : 0

		},

		6 : {

			'penalties': 0,
			'solved' : false,
			'attempted' : false,
			'score' : 700,
			'answer' : "873a641fc888512d1e9956f2ab63c6480bf59650962f9e19523d4fb5eb9fefe4",
			'scored' : 0

		},

		7 : {

			'penalties': 0,
			'solved' : false,
			'attempted' : false,
			'score' : 700,
			'answer' : "2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3",
			'scored' : 0

		},

		8 : {

			'penalties': 0,
			'solved' : false,
			'attempted' : false,
			'score' : 700,
			'answer' : "97bc30958636d678585af665c179ad13a59db0b56441f9401a9504d8cf2f10de",
			'scored' : 0

		},

		9 : {

			'penalties': 0,
			'solved' : false,
			'attempted' : false,
			'score' : 1000,
			'answer' : "8afd348bfbd009777bdf7f213333f58879971be95e77705caf6f681fa25a3c0f",
			'scored' : 0

		},

		10 : {

			'penalties': 0,
			'solved' : false,
			'attempted' : false,
			'score' : 1000,
			'answer' : "a68b412c4282555f15546cf6e1fc42893b7e07f271557ceb021821098dd66c1b",
			'scored' : 0

		},

		11 : {

			'penalties': 0,
			'solved' : false,
			'attempted' : false,
			'score' : 1500,
			'answer' : "22ed1db84e21400ffc69d7215a42f73314ea27dcdecd1a9991cae4d5a0d942c5",
			'scored' : 0

		},

		12 : {

			'penalties': 0,
			'solved' : false,
			'attempted' : false,
			'score' : 1500,
			'answer' : "91969e505d012cfef2edf56b4920ac7f55dcc41282d4b3c4bd96a5e2ec110c1b",
			'scored' : 0

		},

		13 : {

			'penalties': 0,
			'solved' : false,
			'attempted' : false,
			'score' : 1500,
			'answer' : "9c5b5a7978a6a5b49a1a425d2388abb2a98aafb3c983698530631c4bd5b1c777",
			'scored' : 0

		},

		14 : {

			'penalties': 0,
			'solved' : false,
			'attempted' : false,
			'score' : 1800,
			'answer' : "7791da0ff6e2fc8c6ac35f6894b91f3be4575641ab9edc90b4588fb4b6d653df",
			'scored' : 0

		},
		
		15 : {

			'penalties': 0,
			'solved' : false,
			'attempted' : false,
			'score' : 2000,
			'answer' : "3dc1c99df6e4c897966f74568e32a6361f8d8da08578ebd51088fc469719c2f3",
			'scored' : 0

		}

	};
// console.log(questions)