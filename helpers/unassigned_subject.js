module.exports = subject => {
    return subject == null ? `unassigned` : subject.subject_name
}