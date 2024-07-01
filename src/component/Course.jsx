import React from 'react'

const Course = () => {
  return (
    <>
    <div className='container'>
	<div className='row'>
	<div className='col-md-12'>
	<div className='table-responsive'>
    <table  className='table table-hover table-striped ' >
	<thead>
		<tr>
			<th className="th-width">slno</th>
			<th>Course Name</th>
			<th>Course Eligibility</th>
			<th>Duration</th>
			<th>Course fee</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td className='td'>1.</td>
			<td>NIELIT 'A' Level(IT)</td>
			<td>स्नातक</td>
			<td >18 माह (1590 घंटे)</td>
			<td>रु. 43000/-</td>
		</tr>
		<tr>
			<td>2.</td>
			<td>NIELIT 'O' Level(IT)</td>
			<td>10+2/ स्नातक</td>
			<td >
			<p>(12 माह / 06 माह)(520 घंटे)</p>
			</td>
			<td>रु. 17500/-</td>
		</tr>
		<tr>
			<td>3.</td>
			<td>Course on Computer Concepts (CCC)</td>
			<td>10th पास</td>
			<td >02 माह (80 घंटे)</td>
			<td>रु.&nbsp;4555/-</td>
		</tr>
		<tr>
			<td>4.</td>
			<td>Basic Computer Course (BCC)&nbsp;</td>
			<td>8th&nbsp; पास</td>
			<td >01 माह (36 घंटे)</td>
			<td>रु. 2336/-</td>
		</tr>
		<tr>
			<td>5.</td>
			<td>Industrial Training in “Machine Learning using Python”</td>
			<td>10+2 बेसिक कंप्यूटर ज्ञान के साथ/Pursuing Diploma (CS/IT) B.E/B.Tech (CS/IT) / BCA/MCA/B.Sc&nbsp; (IT) एवं समतुल्य&nbsp;</td>
			<td >06 सप्ताह&nbsp;</td>
			<td>रु. 4307/-</td>
		</tr>
		<tr>
			<td>6.</td>
			<td>Industrial Training / Internship in “Programming in Python”</td>
			<td>10+2&nbsp;बेसिक कंप्यूटर ज्ञान के साथ/Pursuing Diploma (CS/IT) B.E/B.Tech (CS/IT)&nbsp;/&nbsp;BCA/MCA/B.Sc&nbsp; (IT)&nbsp;एवं समतुल्य&nbsp;</td>
			<td >06 सप्ताह&nbsp;</td>
			<td>रु.&nbsp;4307/-</td>
		</tr>
		<tr>
			<td>7.</td>
			<td>Certificate Course in ITES- BPO &amp; Soft Skills</td>
			<td>10th पास</td>
			<td >06 सप्ताह</td>
			<td>&nbsp;रु. 4307/-</td>
		</tr>
		<tr>
			<td>8.</td>
			<td>Project Training</td>
			<td>Diploma/BCA/MCA/B.Sc (IT)/MSc(IT)/ B.E/B.Tech (CS/IT)</td>
			<td >रु. 1983/- (प्रति माह)</td>
			<td>-</td>
		</tr>
		<tr>
			<td colspan="5" style={{"width":"724px"}}><strong className='note'>NOTE:</strong> NSQF आधारित पाठ्यक्रमों में SC/ST उम्मीदवारों को पाठ्यक्रम शुल्क से छूट है, किन्तु पंजीकरण एवं परीक्षा शुल्क जमा करनी होगी। (सीट सीमित)</td>
		</tr>
	</tbody>
</table>
</div>
</div>
    </div>
	</div>
    </>
  )
}

export default Course
