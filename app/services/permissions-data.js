import Ember from 'ember';

export default Ember.Service.extend({
  permissions: {
  "navigator": {
    "388": "navigator_access",
    "393": "reports_access",
    "394": "reports_renewal",
    "395": "reports_balance",
    "396": "reports_claims",
    "397": "reports_policy",
    "398": "reports_agent",
    "410": "reports_premiumnotice",
    "411": "reports_policylistdata",
    "412": "navigator_copytoquote",
    "421": "navigator_changerequest",
    "422": "navigator_webpayments",
    "425": "navigator_restrict_premium",
    "429": "reports_locationdetail",
    "430": "navigator_claim_attachment",
    "433": "navigator_submit_claim",
    "436": "navigator_create_claim",
    "439": "new_claim_system"
  },
  "dashboard": {
    "389": "appsfiles_access",
    "401": "dashboard_access",
    "420": "vector_emin",
    "423": "mips_webinquiry",
    "424": "zendesk",
    "427": "dashboard_news",
    "431": "imaging_dashboard",
    "434": "activity_access"
  },
  "claims": {
    "150": "wip",
    "151": "delete_claim",
    "152": "claim_detail_update",
    "153": "claim_detail_view",
    "154": "claim_admin_access",
    "155": "submit_claim_form_config",
    "156": "payment_edit",
    "157": "reserve_edit",
    "158": "reserve_view",
    "159": "view_notes",
    "160": "add_notes",
    "161": "view_reminders",
    "162": "add_reminders_for_self",
    "163": "add_reminders_for_others",
    "164": "view_reminders_for_others",
    "165": "view_activity",
    "166": "assign_tags",
    "167": "assign_substatus",
    "168": "access_documents",
    "169": "loss_recovery_access",
    "170": "payment_view",
    "171": "payment_account",
    "172": "claim_create",
    "173": "search",
    "174": "app_menu",
    "175": "claims",
    "176": "dashboard",
    "177": "payment_void",
    "437": "claims_access"
  },
  "imaging company": {
    "297": "attachments_agency_visibility",
    "298": "attachments_delete",
    "299": "annotations_edit",
    "300": "email",
    "301": "empty_recycle_bin",
    "303": "attachments_folders",
    "306": "update",
    "307": "related_links",
    "308": "create",
    "311": "annotations_view",
    "312": "read",
    "313": "attachments_recycle_bin"
  },
  "imaging management": {
    "331": "attachments_agency_visibility",
    "332": "attachments_delete",
    "333": "annotations_edit",
    "334": "email",
    "335": "empty_recycle_bin",
    "337": "attachments_folders",
    "340": "update",
    "341": "related_links",
    "342": "create",
    "345": "annotations_view",
    "346": "read",
    "347": "attachments_recycle_bin"
  },
  "imaging doc_templates": {
    "195": "attachments_agency_visibility",
    "196": "attachments_delete",
    "197": "annotations_edit",
    "198": "email",
    "199": "empty_recycle_bin",
    "201": "attachments_folders",
    "204": "update",
    "205": "related_links",
    "206": "create",
    "209": "annotations_view",
    "210": "read",
    "211": "attachments_recycle_bin"
  },
  "imaging board": {
    "314": "attachments_agency_visibility",
    "315": "attachments_delete",
    "316": "annotations_edit",
    "317": "email",
    "318": "empty_recycle_bin",
    "320": "attachments_folders",
    "323": "update",
    "324": "related_links",
    "325": "create",
    "328": "annotations_view",
    "329": "read",
    "330": "attachments_recycle_bin"
  },
  "imaging reports": {
    "263": "attachments_agency_visibility",
    "264": "attachments_delete",
    "265": "annotations_edit",
    "266": "email",
    "267": "empty_recycle_bin",
    "269": "attachments_folders",
    "272": "update",
    "273": "related_links",
    "274": "create",
    "277": "annotations_view",
    "278": "read",
    "279": "attachments_recycle_bin"
  },
  "imaging default_claim": {
    "280": "attachments_agency_visibility",
    "281": "attachments_delete",
    "282": "annotations_edit",
    "283": "email",
    "284": "empty_recycle_bin",
    "286": "attachments_folders",
    "289": "update",
    "290": "related_links",
    "291": "create",
    "294": "annotations_view",
    "295": "read",
    "296": "attachments_recycle_bin"
  },
  "imaging reference": {
    "348": "attachments_agency_visibility",
    "349": "attachments_delete",
    "350": "annotations_edit",
    "351": "email",
    "352": "empty_recycle_bin",
    "354": "attachments_folders",
    "357": "update",
    "358": "related_links",
    "359": "create",
    "362": "annotations_view",
    "363": "read",
    "364": "attachments_recycle_bin"
  },
  "imaging claim": {
    "246": "attachments_agency_visibility",
    "247": "attachments_delete",
    "248": "annotations_edit",
    "249": "email",
    "250": "empty_recycle_bin",
    "252": "attachments_folders",
    "255": "update",
    "256": "related_links",
    "257": "create",
    "260": "annotations_view",
    "261": "read",
    "262": "attachments_recycle_bin"
  },
  "imaging agency": {
    "229": "attachments_agency_visibility",
    "230": "attachments_delete",
    "231": "annotations_edit",
    "232": "email",
    "233": "empty_recycle_bin",
    "235": "attachments_folders",
    "238": "update",
    "239": "related_links",
    "240": "create",
    "243": "annotations_view",
    "244": "read",
    "245": "attachments_recycle_bin"
  },
  "imaging policy": {
    "178": "attachments_agency_visibility",
    "179": "attachments_delete",
    "180": "annotations_edit",
    "181": "email",
    "182": "empty_recycle_bin",
    "184": "attachments_folders",
    "187": "update",
    "188": "related_links",
    "189": "create",
    "192": "annotations_view",
    "193": "read",
    "194": "attachments_recycle_bin"
  },
  "imaging default_policy": {
    "212": "attachments_agency_visibility",
    "213": "attachments_delete",
    "214": "annotations_edit",
    "215": "email",
    "216": "empty_recycle_bin",
    "218": "attachments_folders",
    "221": "update",
    "222": "related_links",
    "223": "create",
    "226": "annotations_view",
    "227": "read",
    "228": "attachments_recycle_bin"
  },
  "vector": {
    "392": "quote_access",
    "402": "quote_application",
    "404": "quote_anonymous",
    "405": "quote_startapplication",
    "406": "quote_submitapplication",
    "407": "quote_releaseapplication",
    "408": "quote_issueapplication",
    "409": "quote_rejectapplication",
    "413": "evaluation_access",
    "414": "quote_acceptviolation",
    "415": "quote_customratingtier",
    "417": "quote_revertapplication",
    "418": "vector_perreps",
    "426": "vector_webpayments",
    "428": "binder_access",
    "432": "hide_blank_applications",
    "435": "vector_user_only_access"
  },
  "site": {
    "387": "cpanel_access",
    "399": "authenticate_agent",
    "400": "help_edit",
    "403": "usersettings_access",
    "816": "appsfiles_access"
  },
  "webinquiry": {
    "366": "view_commission_statements",
    "367": "view_book_of_business",
    "368": "view_payment_history",
    "369": "submit_change_request",
    "370": "make_payment",
    "371": "reports_access",
    "372": "block_line_item_premium",
    "373": "update_payment_options",
    "374": "download_active_codes",
    "375": "company_options",
    "376": "claim_attachment",
    "378": "copy_to_quote",
    "379": "submit_claim",
    "380": "create_claim",
    "381": "new_claim_system",
    "382": "claims_report"
  },
  "imaging config": {
    "1259": "imaging_backup"
  },
  "auth": {
    "1": "edit_group_permissions",
    "2": "create_new_groups",
    "3": "manage_users",
    "4": "change_password"
  },
  "rate": {
    "385": "view_rate_sets",
    "386": "edit_rate_sets"
  }
}
});
