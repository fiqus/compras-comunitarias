from compras.utils.emails.subjects import Subjects


class EmailType:
    def __init__(self, subject, template) -> None:
        self.subject = subject
        self.template = template


class ConfirmPurchaseEmailType(EmailType):
    def __init__(self) -> None:
        super().__init__(subject=Subjects.CONFIRM_PURCHASE, template='email_template.html')
