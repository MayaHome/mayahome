var indexCriteria = 1;

function addHoursCriteria() {
	var newHoursCriteria = "<div class='btn-group' data-toggle='buttons-checkbox'>" +
					"<button type='button' class='btn'>L</button>" +
					"<button type='button' class='btn'>M</button>" +
					"<button type='button' class='btn'>M</button>" +
					"<button type='button' class='btn'>J</button>" +
					"<button type='button' class='btn'>V</button>" +
					"<button type='button' class='btn'>S</button>" +
					"<button type='button' class='btn'>D</button>" +
				"</div>" +
				"<div class='input-append bootstrap-timepicker'>" +
					"<input id='timepicker"+indexCriteria+"' type='text' class='input-small'>" +
					"<span class='add-on'><i class='icon-time'></i></span>" +
				"</div>";

	var timepickerId = '#timepicker'+indexCriteria;
	
	addCriteria(newHoursCriteria, 'red', 'icon-time');
	$(timepickerId).timepicker({
		minuteStep: 1,
		showMeridian: false
	});

}

function addDeviceCriteria(deviceName) {
	var deviceCriteria = deviceName +
				"<div class='pull-right'>" +
					"<a href='#' class='btn btn-success'><i class='icon-remove-sign'></i></a>" +
				"</div>";
	addCriteria(deviceCriteria, 'green', 'icon-tablet');
}

function addOperatorCriteria() {
	var operatorCriteria = "<select class='input-small'><option>ET</option><option>OU</option></select>";
	addCriteriaComponent(operatorCriteria, 'yellow', 'icon-filter');
	$('#deleteCriteria'+(indexCriteria-1)).remove();
}

function addCriteriaComponent(criteriaHTML, criteriaColor, criteriaIcon) {
	var newCriteria = "<blockquote id='criteria"+indexCriteria+"' class='"+criteriaColor+"'>" +
				"<div class='form-inline'>" +
					"<i class='"+criteriaIcon+" icon-large "+criteriaColor+"'></i>" +
					criteriaHTML +
					"<div id='deleteCriteria"+indexCriteria+"' class='pull-right'>" +
						"<a href='javascript:deleteCriteria("+indexCriteria+");' class='btn btn-danger'><i class='icon-remove-sign'></i></a>" +
					"</div>" +
				"</div>" +
			  "</blockquote>";
	
	$('#criteriaContainer').append(newCriteria);
	indexCriteria++;
}

function addCriteria(criteriaHTML, criteriaColor, criteriaIcon) {
	if (countCriteria() > 0) {
		addOperatorCriteria();
	}
	addCriteriaComponent(criteriaHTML, criteriaColor, criteriaIcon);
}

function deleteCriteria(criteriaId) {
	if (countCriteria() > 1) {
		if (isLastCriteria(criteriaId)) {
			$('#criteria'+(criteriaId-1)).remove();
		} else {
			$('#criteria'+(criteriaId+1)).remove();
		}
	}
	$('#criteria'+criteriaId).remove();
}

function countCriteria() {
	return $('blockquote[id^=criteria]').size();
}

function isFirstCriteria(criteriaId) {
	return $('blockquote[id^=criteria]').first().attr('id') == "criteria"+criteriaId;
}

function isLastCriteria(criteriaId) {
	return $('blockquote[id^=criteria]').last().attr('id') == "criteria"+criteriaId;
}
