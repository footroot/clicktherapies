I18n.translations || (I18n.translations = {});
I18n.translations["en-gd"] = I18n.extend((I18n.translations["en-gd"] || {}), {
  "MimiFlash": {
    "account": {
      "password_confirmation_dialog": {
        "cancel": "Cancel",
        "error": "Please enter your password",
        "ok": "OK",
        "password": "Please enter your password to save changes to your account.",
        "password_confirmation": "Password confirmation"
      }
    },
    "addons": {
      "custom_domain": {
        "removing_domain": "Removing your domain…",
        "validating_domain": "Validating your domain…"
      },
      "display_names": {
        "onBeforeUnload": {
          "end": "Click OK to abandon the changes or Cancel to go back and save.",
          "start": "You've made changes to your display names."
        },
        "onSubmit": "Saving changes...",
        "onSubmitFailure": "Oops! Something went wrong while trying to update the display names.",
        "onSubmitSuccess": {
          "error": "Oops, we couldn't update the display names because:",
          "success": "Your display name changes have been saved!"
        },
        "restoreSubmitButton": "Save changes"
      },
      "personalization_tags": {
        "onBeforeUnload": {
          "end": "Click OK to abandon the changes or Cancel to go back and save.",
          "start": "You've made changes to your display names."
        },
        "onSubmit": "Saving changes...",
        "onSubmitFailure": "Oops! Something went wrong while trying to update the personalization tags.",
        "onSubmitSuccess": {
          "error": "We could not update the personalization tags because:",
          "success": "Your personalization tag changes have been saved!"
        },
        "restoreSubmitButton": "Save changes"
      },
      "select_addons": {
        "initialize": {
          "confirm_disable": {
            "end": "Your credit card will be charged again if you reenable it later.",
            "start": "Are you sure you want to disable this add-on?"
          },
          "disable_title": "Disable?"
        },
        "onToggleFailure": "Oops! Something went wrong toggling that add-on. Please try again."
      },
      "shared": {
        "onDeleteFailure": "Oops! Could not delete that shared item.",
        "onDeleteSuccess": "Oops! Could not delete that shared item:"
      },
      "subscription_management": {
        "showTip": "Click to add a public name",
        "showUpdateError": "#{list_name} update failed.",
        "showUpdateNotice": "#{list_name} was updated."
      },
      "zoho": {
        "importStarted": "Your Zoho CRM import has started!"
      }
    },
    "affiliate_details_dialog": {
      "onNonUSPersonFormSubmitFailure": {
        "custom_error": "Oops! %{error}",
        "default_error": "Oops! An error occured while uploading your W-8 form. Please, try again in a bit."
      },
      "onRemindLaterFailure": "Oops! An error occured while postponing confirmation. Please, try again in a bit.",
      "onRemindLaterSuccess": "No worries! We will remind you in 24 hours.",
      "onSubmit": "Some required fields have been left blank or have invalid data:",
      "onSubmitFailure": "Oops! An error occured while confirming your affiliate details. Please, try again in a bit.",
      "onSubmitUSPersonFailure": "Oops! An error occured while confirming your affiliate details. Please, try again in a bit.",
      "onUSPersonFormSubmitFailure": {
        "custom_error": "Oops! %{error}",
        "default_error": "Oops! An error occured while uploading your W-9 form. Please, try again in a bit."
      },
      "w9_errors": {
        "employer_id_9_digits": "EIN should consist of digits only and have format: ##-#######",
        "no_checkbox_checked": "You must select a Tax Classification",
        "no_classification_code": "You must enter a tax classification - s, p or c - for LLC",
        "ssn_9_digits": "SSN should consist of digits only and have format: ###-##-####",
        "ssn_and_employer_id_error": "You must enter either your SSN or Employer ID",
        "too_many_checkboxes_checked": "You must select only one Tax Classification"
      }
    },
    "audience": {
      "dashboard_add": {
        "addSuccess": {
          "enqueued": "Your upload is being imported and will be done in a jiffy.",
          "fail": "Oops, I had some trouble there.",
          "overage": {
            "exceeded": "Your upload has exceeded your subscriber limit.",
            "upgrade_by": "You can upgrade by <a href='#{link}'>clicking here</a>"
          }
        },
        "confirmSuppressionUpload": {
          "heading": "Upload to suppression list",
          "msg": "Uploading subscribers directly to the suppression list means you will not be able to send to them. Continue?"
        },
        "emptyFile": "Oops! Looks like you've tried to upload an empty file.",
        "initInvalidEmailsPopup": "Invalid email addresses",
        "invalidFileType": "Oops! Looks like we don't support that file type. Try uploading one of these file types: #{file_types}",
        "markAddManyAsBusy": {
          "add_contacts": "Add subscribers",
          "uploading": "Uploading..."
        },
        "onAddManyFailure": "Oops! Something went wrong while trying to import those subscribers.",
        "onAddManySubmit": {
          "contacting_google": "Contacting Google...",
          "err": "Hmm, the paste doesn't seem to contain any email addresses or be a link to a Google spreadsheet."
        },
        "onAddOneFailure": "Oops! Something went wrong while trying to add that subscriber.",
        "onAddOneSuccess": {
          "overage": {
            "error": {
              "start": "Oops, we couldn't add #{member} because:",
              "that_member": "that subscriber"
            },
            "exceeded_limit": "Your upload has exceeded your subscriber limit.",
            "upgrade_by": "You can upgrade by %{click: clicking here}."
          }
        },
        "onGoogleFailure": "Oops! Something went wrong while trying to import those subscribers from Google.",
        "onUnsuppressFailure": "Oops - something went wrong trying to unsuppress the subscriber.",
        "onUnsuppressSuccess": {
          "fail": "Oops, I had some trouble unsuppressing #{email}",
          "success": "#{email} was successfully added!"
        },
        "setupFlashMessage": {
          "been_created": "#{email} has been created!",
          "been_updated": "#{email} has been updated!",
          "belongs_to_parent": "#{email} belongs to your parent account's suppression list and could not be imported.",
          "not_valid": "#{email} is not a valid email address"
        },
        "showUnsuppressPopup": {
          "is_suppressed": "Oops, #{email} is in your suppression list!",
          "unsuppress_q": "Unsuppress Subscriber?",
          "yes_unsuppress": "Yes, unsuppress"
        },
        "suppressionReasonSentence": {
          "autoreply": "This person is suppressed because their email address returned an %{click: automated email}.",
          "bounce": "This person is suppressed because a campaign that was sent to them %{click: bounced}. ",
          "mailblock": "This person is suppressed because of a %{click: mail block}.",
          "manually_suppressed": "This person has been manually %{click: suppressed by you}.",
          "spam": "This person is suppressed because they marked one of your campaigns as %{click: spam}.",
          "unconfirmed": "This person is %{click: unconfirmed}.",
          "unsubscribed": "This person %{click: unsubscribed} from your email lists. If they intentionally unsubscribed, unsuppressing them is not permitted.",
          "unsuppress_q": "Do you want to unsuppress this subscriber?"
        }
      },
      "dashboard_bulk": {
        "checkSelectedAudienceMembers": "You need to select some subscribers first :)",
        "confirmAddToList": {
          "body": "Are you sure you want to add the selected subscribers to #{list_name}?",
          "title": "Add subscribers to #{list_name}"
        },
        "confirmBulkConfirm": {
          "body": "Confirmed subscribers will receive your messages.<br><br>Are you sure you want to continue?",
          "title": "Confirm subscribers"
        },
        "confirmBulkDelete": {
          "confirm_q": "Are you sure you want to delete #{message}?",
          "info": "This action will permanently and completely erase these subscribers from your account.",
          "title": "Delete subscribers"
        },
        "confirmBulkRemove": {
          "confirm_q": "Are you sure you want to remove #{message}?",
          "info": "You are about to remove subscribers from a list. This will not delete the subscribers.",
          "remove": "Remove subscribers"
        },
        "confirmBulkUnsuppress": {
          "confirm": "Are you sure you want to unsuppress the selected subscribers?",
          "unsuppress": "Unsuppress subscribers"
        },
        "confirmedExport": {
          "onFailure": "Whoops - something went wrong exporting those subscribers.",
          "onSuccess": {
            "end": "I'll shoot you an email when it's done!",
            "start": "Your export will be ready shortly."
          }
        },
        "humanizedNumberOfSelectedAudienceMembers": {
          "more": "subscribers",
          "one": "1 subscriber"
        },
        "onAddToListFailed": "Whoops! Something went wrong adding those subscribers to #{list}",
        "onAddToListSuccess": {
          "audience_member": "subscriber",
          "audience_members": "subscribers",
          "fail": "Oops, couldn't add those subscribers to: #{list}",
          "message": "Awesome, #{addition} added to #{list}."
        },
        "onBulkConfirmFailure": "Oops! Something went wrong confirming those subscribers.",
        "onBulkConfirmSuccess": {
          "fail": "Oops! I couldn't confirm those subscribers because:",
          "member": "One subscriber was confirmed.",
          "members": "#{number} subscribers were confirmed."
        },
        "onBulkDeleteFailure": "Oops! Something went wrong deleting those subscribers.",
        "onBulkDeleteSuccess": {
          "fail": "Oops! I couldn't delete those subscribers because:",
          "member": "One subscriber was deleted",
          "members": "#{number} subscribers were deleted"
        },
        "onBulkRemoveFailure": "Whoops - something went wrong removing those subscribers.",
        "onBulkRemoveSuccess": "Oops! I couldn't remove those subscribers:",
        "onBulkUnsuppressFailure": "Oops! Something went wrong unsuppressing those subscribers.",
        "onBulkUnsuppressSuccess": {
          "fail": "Oops! I couldn't unsuppress those subscribers because:",
          "member": "One subscriber was unsuppressed.",
          "members": "#{number} subscribers were unsuppressed."
        }
      },
      "dashboard_list": {
        "confirmUnconfirmed": {
          "confirm": "Are you sure you want to confirm #{email}?",
          "info": "Confirmed subscribers will receive your campaigns.",
          "title": "Confirm #{email}"
        },
        "deleteMember": {
          "confirm": "Are you sure you want to delete this subscriber?",
          "info": "This action will permanently erase this subscriber and its related data from your account.",
          "title": "Delete #{email}"
        },
        "onConfirmUnconfirmedFailure": "Oops! Something went wrong while trying to confirm that subscriber.",
        "onConfirmUnconfirmedSuccess": "Oops, we couldn't confirm #{email}: #{error}",
        "onDeleteFailure": "Oops! Something went wrong while trying to delete that subscriber.",
        "onDeleteSuccess": "Oops, we couldn't delete #{email} because: ",
        "onRemoveFromListFailure": "Oops! Something went wrong while trying to remove that subscriber from the list.",
        "onRemoveFromListSuccess": "Oops, we couldn't remove #{email} from the list: #{listName}",
        "onSuppressFailure": "Oops! Something went wrong while trying to suppress that subscriber from the list.",
        "onSuppressSuccess": {
          "fail": "Oops, we couldn't suppress #{email} because:"
        },
        "onUnsuppressFailure": "Oops! Something went wrong while trying to unsuppress that subscriber.",
        "onUnsuppressSuccess": {
          "fail": "Oops, we couldn't unsuppress #{email} from the list:"
        },
        "removeFromList": {
          "confirm": "Are you sure you want to remove #{email}?",
          "info": "You are about to remove a subscriber from a list. This will not delete the subscriber.",
          "title": "Remove #{email}"
        },
        "showConfirmAddToList": {
          "body": "Are you sure you want to add #{email} to the list?",
          "onAddToListFailed": "Whoops! Something went wrong adding #{email} to #{list}",
          "onAddToListSuccess": {
            "fail": "Oops, couldn't add #{email} to #{list}",
            "success": "Awesome, #{email} added to #{list}"
          },
          "title": "Add #{email} to list."
        },
        "suppressMember": {
          "confirm": "Are you sure you want to suppress #{email}?",
          "title": "Suppress #{email}"
        },
        "unsuppress": {
          "confirm": "Are you sure you want to unsuppress #{email}?",
          "info": "Unsuppressed subscribers will receive your campaigns.",
          "title": "Unsuppress #{email}"
        }
      },
      "edit": {
        "onDelete": {
          "confirm": "Are you sure you want to delete this subscriber?",
          "info": "This action will permanently erase this subscriber and its related data from your account.",
          "title": "Delete #{email}"
        },
        "onGetMailingsTableFailure": "Oops - could not pull in the subscriber's campaigns.",
        "onSubmit": "Saving Changes...",
        "onSubmitFailure": {
          "button": "Save Changes",
          "error": "Oops! Something went wrong while trying to save those changes."
        },
        "onSubmitSuccess": {
          "button": "Save Changes",
          "error": "Oops, I couldn't save those changes because:",
          "notice": "Changes saved!"
        },
        "onSuppress": {
          "confirm": "Are you sure you want to suppress this person?",
          "info": "This person will remain in your list of subscribers, but will not be considered active or allowed to receive emails. Suppressions do not count against your account total.",
          "title": "Suppress Subscriber?"
        },
        "onSuppressComplete": {
          "fail": "Oops #{email} could not be suppressed",
          "suppressed": "#{email} has been suppressed"
        },
        "onSuppressFailed": "Oops - something went wrong trying to suppress the subscriber:",
        "onUnsuppress": {
          "button": "Yes, unsuppress",
          "confirm": "Are you sure you want to unsuppress this subscriber?",
          "title": "Unsuppress Subscriber?"
        },
        "onUnsuppressComplete": {
          "fail": "Oops - we could not unsuppress that subscriber",
          "success": "has been unsuppressed"
        },
        "onUnsuppressFailed": "Oops - something went wrong trying to unsuppress the subscriber:",
        "suppressionMessage": "This person will immediately become an active subscriber again and will be able to receive emails."
      }
    },
    "audience_export": {
      "confirmedExport": {
        "onFailure": "Whoops - something went wrong exporting those subscribers.",
        "onSuccess": {
          "end": "I'll shoot you an email when it's done!",
          "start": "Your export will be ready shortly."
        }
      }
    },
    "audience_list": {
      "list": {
        "onListDeleteFailure": "Whoops! Something went wrong trying to delete the list - please try again later"
      },
      "new_list": {
        "onNewListSubmitFailure": "Oops! Something went wrong while trying to create your list.",
        "onNewListSubmitSuccess": "Oops, we couldn't create your subscriber list because:"
      },
      "update_list": {
        "onListClick": {
          "confirm": "Deleting a list is permanent. Are you sure you want to continue?",
          "denied": "This list cannot be deleted because it is associated with an autoresponder.",
          "has_drip_campaign": "This list cannot be deleted because it is associated with an autoresponder.",
          "has_trigger": "This list cannot be deleted because it is associated with a trigger.",
          "has_trigger_and_drip": "This list cannot be deleted because it is associated with an autoresponder and a trigger.",
          "info": "When deleting a list, your actual subscribers will not be deleted.",
          "title": "Delete list"
        },
        "onSubmitListNameFailure": "Whoops! Something went wrong deleting the list",
        "onSubmitListNameSuccess": "Oops, we couldn't create your subscriber list because:",
        "onSubmitListNameSuccessTemplate": "Subscriber list #{list_name} updated"
      }
    },
    "big_commerce": {
      "checkCredentials": {
        "onFailure": "Oops, something went wrong.",
        "onSuccess": {
          "credentials_valid": "Your Bigcommerce store is configured properly.",
          "else": "There seems to be an issue communicating with Bigcommerce, please check your credentials."
        }
      },
      "linkStore": {
        "onFailure": "Oops, something went wrong."
      },
      "linkingFinished": {
        "fail": "Your Bigcommerce store could not be linked. Please check your credentials and try again.",
        "success": "Your Bigcommerce store was linked successfully."
      },
      "startImport": {
        "onFailure": "Oops, something went wrong.",
        "onSuccess": "Your Bigcommerce Import has started."
      },
      "unlinkStore": {
        "onFailure": "Oops, something went wrong.",
        "onSuccess": "Your Bigcommerce store was unlinked successfully."
      }
    },
    "composer": {
      "image": {
        "onFullImageFailed": "Could not load the full image:",
        "onThumbnailFailed": "Could not load the thumbnail #{image_name}.",
        "onThumbnailFailure": "There was an error processing the image named #{image_name}.",
        "trash": "Whoa, hold on! Deleting this image will remove it from all campaigns that use it. Delete anyway?"
      },
      "logo_uploader": {
        "invalid_file": "There is a problem with your file. Are you sure it is an image?"
      },
      "product_list": {
        "onGrabDataFailure": "Something went wrong when trying to get your product list:",
        "onRefreshProductsFailure": "Something went wrong when trying to refresh your product list:"
      },
      "promotion": {
        "failed": {
          "default_errorMessage": "We were unable to reach the server.",
          "error": "Oops! Something went wrong while saving the campaign. Please try again."
        }
      },
      "promotion_module_image": {
        "onFullImageFailed": "Could not load the full image #{image_name}.",
        "onThumbnailFailure": "There was an error processing the image named #{image_name}."
      },
      "promotion_module_markdown_editor": {
        "onFetchEventsFailure": "Oops, there was a problem fetching your events.",
        "onFetchEventsSuccess": {
          "no_events": "Oops, it doesn't look like you have any events live.",
          "problem": "Oops, there was a problem fetching your events:"
        },
        "onFetchSurveysFailure": "Oops, there was a problem fetching your surveys.",
        "onFetchSurveysSuccess": {
          "no_surveys": "Oops, it doesn't look like you have any surveys set up.",
          "problem": "Oops, there was a problem fetching your surveys:"
        },
        "onFetchTagsFailure": "Oops, there was a problem fetching your personalization tags.",
        "onFetchTagsSuccess": {
          "problem": "Oops, there was a problem fetching your personalization tags:"
        }
      },
      "setup": {
        "doPublishToAffiliates": "There is a mailing scheduled in under an hour. Are you sure you want to publish?",
        "onPublishToAffiliatesFailure": "Something went wrong trying to publish the campaign.",
        "onPublishToAffiliatesSuccess": {
          "fail": "Something went wrong trying to publish the campaign:",
          "success": "The campaign is being published."
        },
        "promotionLoadError": "Oops! Something went wrong while trying to load the campaign",
        "upgrade": "Saving First..."
      },
      "theme_create_dialog": {
        "duplicate_name": "Oops! You already have an existing style with the same name!",
        "invalid_url": "Oops! Link you provided doesn't look right.",
        "proxy_error": "Oops! We were unable to fetch your website!"
      },
      "theme_list": {
        "check_theme": {
          "on_failure": "Something went wrong",
          "used": "This style is used by this campaign. Choose another style before deleting."
        },
        "confirm": {
          "delete": "Delete",
          "delete_theme_header": "Delete style?",
          "not_used": {
            "you_sure": "Are you sure you want to delete #{theme_name}?"
          },
          "other_promotions": {
            "info": "Deleting this style will change the display of the other campaigns in which it is used.",
            "you_sure": "Are you sure? This style is used in your other campaigns."
          }
        },
        "delete_theme": {
          "on_failure": "Something went wrong",
          "on_success": "The style has been deleted"
        }
      }
    },
    "dashboard": {
      "delete_dialog": {
        "deleting": "Deleting...",
        "dialog": {
          "cancel": "Cancel",
          "delete": "Delete!",
          "description": "Are you sure you want to delete #{name}?",
          "title": "Delete campaign?"
        }
      },
      "import_from_starter_account": {
        "onImportSuccess": "Success! Your starter account has been imported."
      },
      "large_promotion_list": {
        "edit": "edit",
        "preparing": "Preparing to",
        "schedule": "schedule",
        "send": "send"
      },
      "promotion_item": {
        "cloneTextCloning": "Cloning…",
        "handleChildCloneSuccess": "Your campaign is cloning.",
        "handleCloneFailure": "Oops, we could not clone this campaign.",
        "handleCloneSuccess": "Clone campaign",
        "handleDripCampaignCloneSuccess": "Your campaign is cloning.",
        "handleSelfCloneSuccess": "Your clone of #{promotion} is ready.",
        "onCancelFailure": "Oops! Something went wrong while trying to cancel this campaign.",
        "onCancelSuccess": "Oops, I had some trouble there.",
        "onDeliverFailure": "Oops! Something went wrong while trying to run this campaign.",
        "onDeliverSuccess": "Oops, I had some trouble there.",
        "onPauseFailure": "Oops! Something went wrong while trying to pause this campaign.",
        "onPauseSuccess": "Oops, I had some trouble there.",
        "onPromotionFailed": "Oops! Something went wrong while trying to load these campaigns.",
        "updateDomAndFlashUserOnCloneToSelf": "Cloning #{promotion}. It'll be just a sec."
      },
      "promotion_item_stats": {
        "onRefreshStatsFailure": "Oops! Something went wrong while trying to refresh the stats for this campaign.",
        "onRefreshStatsSuccess": "Oops, I had some trouble there.",
        "refresh": {
          "finished_sending": "#{promotionName} has finished sending on #{time}",
          "stats_refreshed": "stats have refreshed"
        }
      },
      "undo_delete_flash": {
        "deleted": "has been deleted.",
        "undo": "Undo"
      }
    },
    "drips": {
      "dashboard": {
        "deleteCampaign": {
          "confirm": "Are you sure you want to delete this autoresponder?",
          "info": "Deleting an autoresponder is %{b:permanent} and %{b:cannot} be undone.",
          "title": "Delete Autoresponder?"
        },
        "onDeleteFailure": "Oops! Something went wrong while trying to delete this campaign.",
        "onDeleteSuccess": "Oops, could not delete this campaign because:",
        "onStartCampaignFailure": "Oops! Something went wrong while trying to start this campaign.",
        "onStartCampaignSuccess": "Oops, could not start this campaign because:",
        "onStopCampaignFailure": "Oops! Something went wrong while trying to pause this campaign.",
        "onStopCampaignSuccess": "Oops, could not pause this campaign because:"
      },
      "drafts": {
        "activate_draft": "activate this autoresponder.",
        "make_drip_draft": "make this autoresponder draft.",
        "onDraftClickFailure": "Oops! Something went wrong while trying to"
      },
      "drip_details_dialog": {
        "step1ValidateCancel": {
          "no_from": "This autoresponder does not yet have a from address.",
          "no_subject": "This autoresponder does not yet have a subject."
        }
      },
      "edit": {
        "confirmSave": {
          "confirm": "Do you want to save changes before continuing?",
          "info": "If you do not save now, changes to the campaign name and autoresponder scheduling will be lost.",
          "title": "Save Changes?"
        },
        "onBeforeUnload": {
          "end": "Click OK to abandon the changes or Cancel to go back and save.",
          "start": "You've made changes to this autoresponder."
        },
        "onCloneFailure": "Oops! Something went wrong while trying to clone that autoresponder.",
        "onCloneSuccess": "Oops, we couldn't clone that autoresponder because:",
        "onDeleteClick": {
          "body": "Are you sure you want to delete the entire autoresponder?",
          "title": "Delete Campaign?"
        },
        "onPauseClick": {
          "body": "Your first campaign is set to send immediately. If you enable the campaign now, all subscribers of the list that have not yet received the first campaign, will receive it within the hour.",
          "title": "Start the campaign?"
        },
        "onSaveFailure": "Oops! Something went wrong while trying to save.",
        "onSaveSuccess": {
          "error": "Oops, we could not save your campaign, because:"
        },
        "onTrashFailure": "Oops! Something went wrong while trying to trash that autoresponder.",
        "onTrashSuccess": "Oops, we couldn't trash that autoresponder because:",
        "trash": {
          "body": "Are you sure you want to trash the autoresponder:",
          "title": "Trash Autoresponder?"
        }
      }
    },
    "mailing": {
      "blank_email_error": "Please fill in your Email Address.<br>",
      "error_heading": "We've hit a snag:<br><br>",
      "invalid_email_error": "Please fill in a valid email address.<br>",
      "name_error": "Please fill in your From Name.<br>",
      "postal_address_error": "Please fill in the postal address for your email.<br>",
      "subject_error": "Please fill in the subject for your email.<br>",
      "unknown_error": "Oops! Please try again! If you continue to experience issues, please contact support!"
    },
    "mailing_credits": {
      "purchase_wizard": {
        "onGetQuoteFailure": "There was a problem calculating your price. Please try again.",
        "setPurchasingContent": {
          "button": "Purchasing Credits...",
          "caption": "Please wait while we submit your purchase."
        },
        "start": "We are calculating your price for #{amount} mailing credits."
      }
    },
    "mailings": {
      "new_dashboard": {
        "onCalendarInvalid": "Oops! Looks like your date selection is invalid.",
        "onMailingCancelFailure": "Oops! Something went wrong trying to cancel the send.",
        "onMailingCancelSuccess": "Whew, your send was stopped.",
        "onMailingInvalid": "Some fields are missing or incorrect:",
        "onMailingListCountFailed": "Oops! Something went wrong while trying to count your subscriber.",
        "onMailingRecipientsOverLimit": "You can only email up to #{limit_number} subscribers when you're over your subscriber limit.",
        "onMailingSaveFailure": "Oops! Something went wrong while trying to save.",
        "onMailingSaveSuccess": "Saved!",
        "onMailingScheduleFailure": "Oops! Something went wrong while trying to schedule your send.",
        "onMailingSendFailure": "Oops! Something went wrong while trying to save the mailing.",
        "onResendSenderVerificationFailure": "Oops! We couldn't send the verification email. Please try again in a few minutes.",
        "onResendSenderVerificationSuccess": "We've re-sent that email! If you still don't get it, please check your spam folder too.",
        "onScheduleError": "Oops! I couldn't delete your schedule - please try again later.",
        "onScheduleFailure": "Oops! Something went wrong while trying to delete the schedule."
      },
      "send_dialog": {
        "onUnsuppressComplete": {
          "fail": "Oops - we could not unusppress that subscriber",
          "success": "has been unsuppressed"
        },
        "onUnsuppressFailed": "Oops - something went wrong trying to unsuppress the subscriber:",
        "unsuppress": {
          "body": "Are you sure you want to unsuppress this subscriber?",
          "button": "Yes, unsuppress",
          "title": "Unsuppress Subscriber?"
        }
      }
    },
    "payment_form": {
      "onAddressValidationFailure": {
        "default": "Oops! We cannot validate your address right now due to error: %{error}. Please, try again later.",
        "invalid": "Oops! Your address does not appear to be valid. Please, double check it and try again.",
        "over_query_limit": "Oops! We cannot validate your address because you are over the limit. Please, try again in 24 hours time.",
        "server_error": "Oops! We cannot validate your address right now. Please, change it and try again."
      },
      "onSubmit": "Some required fields have been left blank or have invalid data:",
      "submitError": "Oops! We couldn't update your payment details. Please try another card or contact your bank. Contact support@madmimi.com if you experience further issues."
    },
    "plans": {
      "interpretFailure": {
        "blocked_ip": "Your IP has been blocked. Please contact support.",
        "end": "Please try again later",
        "retry_15_min": "Please try again in 15 minutes.",
        "start": "Urg, couldn't change your plan because:"
      },
      "submitError": "Oops! We couldn't update your details. Please try updating your payment details or contact your bank. Contact support@madmimi.com if you experience further issues.",
      "updateButton": {
        "downgrade": "Downgrade",
        "email": "Email Us",
        "upgrade": "Upgrade",
        "your_plan": "Your Plan"
      }
    },
    "promotion": {
      "edit_raw": {
        "failed": {
          "error": "Oops! Something went wrong while saving the campaign. Please try again."
        },
        "initSkipInlining": "WARNING: When you disable CSS inlining we will send your HTML exactly as is. Your campaign may not appear as you expect in Outlook or Gmail. Please send test emails before your final send.",
        "success": {
          "error": "Oops! Something went wrong while saving the campaign. Please try again."
        }
      },
      "edit_text": {
        "onImportFailure": "Oops! We couldn't reimport the text.",
        "onImportSuccess": "Oops! Couldn't reimport the text because:",
        "onSaveFailure": "Oops! We couldn't reimport the text.",
        "onSaveSuccess": "Oops! Couldn't save the text because:"
      },
      "import_url_dialog": {
        "onImportSuccess": "Hooray! HTML retrieved!"
      },
      "import_zip_dialog": {
        "onUploadSuccess": "Hooray! Zip uploaded!"
      },
      "send_test": {
        "onSubmit": {
          "onFailure": "Error sending test email. Please try again or contact support if problem persists.",
          "onSuccess": "Test email sent to:"
        },
        "validateEmail": "The mail address you tried to send to is invalid. Please fix it and try to send again!"
      }
    },
    "rss_feeds": {
      "dashboard": {
        "confirm_feed": {
          "body": "Are you sure you want to delete the RSS campaign for",
          "end": "Want to create another?",
          "note": "Setting up multiple RSS mailings with the same feed URL may lead to unintentional duplicate sends.",
          "start": "It seems that you've already created an RSS mailing for this feed URL.",
          "title": "Delete RSS Campaign?"
        },
        "onCheckFailure": "Oops, something went wrong importing this feed!",
        "onDeleteClick": {
          "body": "Are you sure you want to delete the RSS mailing for",
          "title": "Delete RSS Mailing?"
        },
        "onDeleteFailure": "Er, Something went wrong while trying to delete that RSS Campaign.",
        "onPauseFailure": "Uh oh! Something went wrong when pausing this feed...",
        "onPauseSuccess": "This feed has been paused!",
        "onResumeFailure": "Uh oh! Something went wrong when resuming this feed...",
        "onResumeSuccess": "This feed has been resumed!"
      },
      "feed_history_dialog": {
        "onFindUnsentFailure": "Uh oh! Can't find unsent posts...",
        "onForceSend": {
          "onFailure": "Uh oh! Something went wrong when forcing this send...",
          "onSuccess": "Ok, this send is on its way",
          "unScheduled": "Sorry, we can't force this send before your RSS campaign has been scheduled."
        }
      },
      "schedule_dialog": {
        "delete": "Delete",
        "onFailure": "Error. Please try again.",
        "onResponse": "Your RSS campaign was scheduled."
      }
    },
    "signups": {
      "activation_message_dialog": {
        "onSubmitFailure": "Oops! Something went wrong while trying to save your activation message.",
        "onSubmitSuccess": {
          "fail": "Sorry, we couldn't save your form because:",
          "success": "Activation message saved!"
        }
      },
      "base": {
        "addFieldToPreviewFailure": "Oops! Something went wrong while trying to add a field to your form",
        "addFieldToPreviewSuccess": "Oops, we couldn't add that field because:",
        "removeFieldFromPreviewFailure": "Oops! Something went wrong while trying to remove a field from your form",
        "removeFieldFromPreviewSuccess": "Oops, we couldn't remove that field because:"
      },
      "custom_field": {
        "buildListItem": "Oops! This option is blank.",
        "duplicateFieldError": "Oops! This field already exists.",
        "editCustomFieldFailure": "Oops! Something went wrong while trying to edit your field.",
        "editCustomFieldSuccess": "Oops! Your field could not be edited because",
        "finishCurrentEditError": "Oops! Please finish editing your first option.",
        "saveOptionsFailure": "Oops! Something went wrong while trying to save the field options",
        "saveOptionsSuccess": "Oops! Your options could not be saved because"
      },
      "custom_field_dialog": {
        "fieldNameError": "Oops. Field reference can only have regular characters and spaces.",
        "fieldNameNotUrlError": "Oops. Terms of Service link is not a valid link.",
        "missingField": "Oops. All fields need to be filled in."
      },
      "dashboard": {
        "deleteSignup": {
          "body": "Are you sure you want to delete #{name}?",
          "title": "Delete form?"
        },
        "shareSignup": "Share #{name} form"
      },
      "default_signup": {
        "initConfirmUnsetDialog": {
          "body": "Are you sure you want to remove your default signup form? This will remove the Subscribe link from your emails.",
          "title": "Remove Default signup form?"
        },
        "onSubmitSetSuccess": "Your default signup form has been set!",
        "onSubmitUnsetSuccess": "Your default signup form has been removed!",
        "showConfirmSetDialog": "This will add a Subscribe link to the bottom of your emails."
      },
      "destroy": {
        "onDeleteSuccess": "Successfully removed your signup form"
      },
      "edit": {
        "ShareDialog": {
          "info": "Anyone who you share this URL with will be able to view this signup form and signup to your newsletter.",
          "title": "Share this form"
        },
        "addCustomListFailure": "Oops! Something went wrong while trying to add a list to your form",
        "addCustomListSuccess": "Oops, we couldn't add that list because:",
        "addListToPreviewFailure": "Oops! Something went wrong while trying to add a list to your form",
        "addListToPreviewSuccess": "Oops, we couldn't add that list because:",
        "addRequiredListsCheckbox": "Require at least one list to be selected",
        "backgroundFailed": "Oops! We could not upload that background:",
        "confirmDeleteDialog": {
          "body": "Are you sure you want to delete this signup form?",
          "button": "Yes, delete",
          "title": "Delete signup form?"
        },
        "confirmDeleteFieldDialog": {
          "body": "Are you sure you want to delete this field?",
          "button": "Yes, delete",
          "title": "Delete Field?"
        },
        "logoFailed": "Oops! We could not upload that logo:",
        "onBeforeUnload": {
          "end": "Click OK to abandon the changes or Cancel to go back and save.",
          "start": "You've made changes to this form."
        },
        "onSubmitFailure": "Oops! Something went wrong while trying to save your form",
        "onSubmitSuccess": "Oops, we couldn't save your form because:",
        "onSubmitWebformTitleFailure": "Oops! Something went wrong while trying to update your form name",
        "onSubmitWebformTitleSuccess": "Oops, we couldn't update the form name because:",
        "removeListFromPreviewFailure": "Oops! Something went wrong while trying to remove a list from your form",
        "removeListFromPreviewSuccess": "Oops, we couldn't remove that list because:",
        "submitFieldsOrderFailure": "Oops! Something went wrong while trying to save the fields order",
        "submitFieldsOrderSuccess": "Oops, we couldn't save these fields order because:",
        "toggleRequiredFieldFailure": "Oops! Something went wrong while trying to make that field required",
        "toggleRequiredFieldSuccess": "Oops, we couldn't make that field required because:",
        "toggleRequiredListsFailure": "Oops! Something went wrong while trying to make the lists required",
        "toggleRequiredListsSuccess": "Oops, we couldn't make the lists required because:",
        "updateUiForNonRequiredField": "Make field required",
        "updateUiForNonRequiredLists": "Require at least one list to be selected",
        "updateUiForRequiredField": "Required field",
        "updateUiForRequiredLists": "At least one list must be selected"
      },
      "edit_title_dialog": {
        "EditTitleDialog": {
          "cancel": "Cancel",
          "ok": "OK",
          "title": "Signup form title:"
        },
        "edit_title": "Edit Signup Form Title",
        "updateTitle": "Signup form title can't be blank",
        "updateTitleFailure": "Oops! Something went wrong while trying to update your title.",
        "updateTitleSuccess": "Oops, we could not update your title because:"
      },
      "embed_dialog": {
        "getIframeDimensionsFailure": "Oops! Something went wrong while trying to grab the dimensions of your form",
        "getIframeDimensionsSuccess": "Oops, we couldn't update your form dimensions because:",
        "onSetToDefaultWidthFailure": "Oops! Something went wrong while trying to retrieve the default width of your form.",
        "onSetToDefaultWidthSuccess": "Oops, we couldn't retrieve your default width because:",
        "onUpdateIframeWidthFailure": "Oops! Something went wrong while trying to update the width of your form",
        "onUpdateIframeWidthSuccess": "Oops, we couldn't update your form width because:",
        "setIframeHeaderFailure": "Oops! Something went wrong while trying to update your header.",
        "setIframeHeaderSuccess": "Oops, we could not set your header because:",
        "updateIncludeHeaderText": {
          "header": "Include your form header",
          "logo": "Include your branded logo"
        },
        "widthViolationErrorMessage": {
          "at_least": "Your form must be at least #{number} pixels wide.",
          "less_than": "Your form must be less than #{number} pixels wide."
        }
      }
    },
    "social_links": {
      "onSubmitFailure": "Oops, we couldn't save your social links."
    },
    "spree": {
      "check_credentials": {
        "failure": "Oops, something went wrong.",
        "success": {
          "credentials_valid": "Your Spree store is configured properly.",
          "else": "There seems to be an issue communicating with Spree, please check your credentials."
        }
      },
      "import": {
        "failure": "Oops, something went wrong.",
        "finished": "Your Spree import has finished!",
        "success": "Your Spree Import has started."
      },
      "save_credentials": {
        "failure": {
          "general": "Oops, something went wrong.",
          "not_linked": "Your Spree store could not be linked. Please check your credentials and try again."
        },
        "success": "Your Spree store was linked successfully."
      },
      "unlink_store": {
        "failure": "Oops, something went wrong.",
        "success": "Your Spree store was unlinked successfully."
      }
    },
    "stats": {
      "buttons": {
        "onCancelFailure": "Oops! Something went wrong while trying to cancel this campaign.",
        "onCancelSuccess": "Oops, I had some trouble there.",
        "onDeliverFailure": "Oops! Something went wrong while trying to run this campaign.",
        "onDeliverSuccess": "Oops, I had some trouble there.",
        "onPauseFailure": "Oops! Something went wrong while trying to pause this campaign.",
        "onPauseSuccess": "Oops, I had some trouble there.",
        "onShareClick": "Anyone who you share this link with will be able to view this mailing's stats, but will not have access to anything else. You may disable this feature in your add-ons area.",
        "updateStats": "#{promo} has finished sending on #{time}"
      },
      "compare_stats": {
        "onDeleteFailure": "Oops! We could not delete those stats.",
        "onExportClonesClick": "We'll send you an email when the exported stats are ready."
      },
      "overview_tabs": {
        "addToListSuccess": {
          "fail": "Your selected subscribers are being added to the #{list_name} list. You'll receive an email when it is complete.",
          "success": "Your selected subscribers have been added to the #{list_name} list."
        },
        "confirmAddToList": {
          "body": "Are you sure you want to add these subscribers to the #{list_name} list?",
          "title": "Add to #{list_name}?"
        },
        "exportFailure": "Oh no! Something went wrong while trying to set up that export.",
        "exportSuccess": "Your export is processing. You'll receive an email when the export is complete.",
        "promotionAttemptsFailed": "Oops. I couldn't load the recipients for",
        "showFailedPALoadFlash": "Oops. I couldn't load the recipients. Please try again later."
      },
      "share_dialog": {
        "close": "Close",
        "link_to": "Link to:",
        "onFetchUrlFailure": "Oops! Something went wrong fetching the link.",
        "onFetchUrlSuccess": "Oops! Something went wrong fetching the link:",
        "share_this": "Share this!"
      }
    },
    "triggers": {
      "audience_error": "Please select a subscriber list for the trigger.<br>",
      "error_heading": "We've hit a snag:<br><br>",
      "name_error": "Please give this trigger a name.<br>",
      "promotion_error": "Please select a campaign for the trigger.<br>",
      "trigger_attribute_error": "Please select an attribute column for the trigger.<br>",
      "unknown_error": "Oops! Please try again! If you continue to experience issues, please contact support!"
    },
    "tweaks": {
      "promotion_tweaker": {
        "onBeforeUnload": {
          "changes_made": {
            "end": "Click OK to abandon the changes or Cancel to go back and save.",
            "start": "You've made changes to your Campaign Tweaks."
          }
        },
        "onSubmit": "Saving Changes...",
        "onSubmitFailed": "Oops, looks like something went wrong:",
        "onSubmitSuccess": {
          "couldnt_save": "Oops, couldn't save those changes because:",
          "create": "Success! Your tweaks have been saved.",
          "update": "Save Changes"
        }
      }
    }
  },
  "activerecord": {
    "attributes": {
      "audience_member": {
        "activation_code": "Activation code",
        "address": "Address",
        "audience_import_id": "Subscriber import ID",
        "bounce_code": "Bounce code",
        "city": "City",
        "company": "Company",
        "confirmation_ip": "Confirmation IP",
        "confirmation_timestamp": "Confirmation timestamp",
        "confirmed": "Confirmed",
        "confirmed_at": "Confirmed at",
        "country": "Country/Region",
        "created_at": "Created at",
        "deleted": "Deleted",
        "disable_tracking": "Disable view and click tracking for this person",
        "email": "Email",
        "first_name": "First name",
        "ip": "IP",
        "last_name": "Last name",
        "phone": "Phone",
        "signup_id": "Signup ID",
        "signup_ip": "Signup IP",
        "signup_timestamp": "Signup timestamp",
        "state": "State",
        "suppressed": "Suppressed",
        "suppression_reason": "Suppression reason",
        "title": "Title",
        "zip": "Zip"
      },
      "doorkeeper/application": {
        "name": "Name",
        "redirect_uri": "Redirect URI"
      },
      "freshbooks/configuration": {
        "username": "Subdomain"
      },
      "promotion": {
        "name": "Name",
        "raw_html": "Raw html"
      },
      "signup": {
        "from_address": "From address"
      },
      "user": {
        "agree_to_terms": "Agree to terms",
        "email": "Email address",
        "first_name": "First name",
        "last_name": "Last name",
        "organization_name": "Company/Group",
        "password": "Password",
        "password_confirmation": "Password confirmation",
        "postal_address": "Physical address"
      }
    },
    "errors": {
      "messages": {
        "record_invalid": "%{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "has already been taken",
        "trl_wrong_content_type": "is an invalid image. Please try again with an image file such as a JPG, PNG, or GIF."
      },
      "models": {
        "application": {
          "attributes": {
            "redirect_uri": {
              "fragment_present": "cannot contain a fragment.",
              "has_query_parameter": "cannot contain a query parameter.",
              "invalid_uri": "must be a valid URI.",
              "relative_uri": "must be an absolute URI."
            }
          }
        },
        "doorkeeper/application": {
          "attributes": {
            "redirect_uri": {
              "fragment_present": "cannot contain a fragment.",
              "invalid_uri": "must be a valid URI.",
              "relative_uri": "must be an absolute URI.",
              "secured_uri": "must be an HTTPS/SSL URI."
            }
          }
        }
      }
    },
    "models": {
      "promotion": "campaign",
      "promotion_tweaker": "campaign tweaks",
      "signup": "signup form",
      "user": "user"
    }
  },
  "date": {
    "abbr_day_names": [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    "abbr_month_names": [
      null,
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "day_names": [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "formats": {
      "default": "%m-%d-%Y",
      "long": "%B %d, %Y",
      "short": "%b %d",
      "short_month": "%b"
    },
    "month_names": [
      null,
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    "order": [
      "month",
      "day",
      "year"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "about 1 hour",
        "other": "about %{count} hours"
      },
      "about_x_months": {
        "one": "about 1 month",
        "other": "about %{count} months"
      },
      "about_x_years": {
        "one": "about 1 year",
        "other": "about %{count} years"
      },
      "almost_x_years": {
        "one": "almost 1 year",
        "other": "almost %{count} years"
      },
      "half_a_minute": "half a minute",
      "less_than_x_minutes": {
        "one": "less than a minute",
        "other": "less than %{count} minutes"
      },
      "less_than_x_seconds": {
        "one": "less than 1 second",
        "other": "less than %{count} seconds"
      },
      "over_x_years": {
        "one": "over 1 year",
        "other": "over %{count} years"
      },
      "x_days": {
        "one": "1 day",
        "other": "%{count} days"
      },
      "x_minutes": {
        "one": "1 minute",
        "other": "%{count} minutes"
      },
      "x_months": {
        "one": "1 month",
        "other": "%{count} months"
      },
      "x_seconds": {
        "one": "1 second",
        "other": "%{count} seconds"
      }
    },
    "prompts": {
      "day": "Day",
      "hour": "Hour",
      "minute": "Minute",
      "month": "Month",
      "second": "Seconds",
      "year": "Year"
    }
  },
  "errors": {
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "blank": "can't be blank",
      "confirmation": "doesn't match %{attribute}",
      "empty": "can't be empty",
      "equal_to": "must be equal to %{count}",
      "even": "must be even",
      "exclusion": "is reserved",
      "greater_than": "must be greater than %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "in_between": "must be in between %{min} and %{max}",
      "inclusion": "is not included in the list",
      "invalid": "does not seem to be valid",
      "less_than": "must be less than %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "not_a_number": "is not a number",
      "not_an_integer": "must be an integer",
      "odd": "must be odd",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "record_invalid": "Validation failed: %{errors}",
      "restrict_dependent_destroy": {
        "many": "Cannot delete record because dependent %{record} exist",
        "one": "Cannot delete record because a dependent %{record} exists"
      },
      "spoofed_media_type": "has contents that are not what they are reported to be",
      "taken": "has already been taken",
      "too_long": {
        "one": "is too long (maximum is 1 character)",
        "other": "is too long (maximum is %{count} characters)"
      },
      "too_short": {
        "one": "is too short (minimum is 1 character)",
        "other": "is too short (minimum is %{count} characters)"
      },
      "wrong_length": {
        "one": "is the wrong length (should be 1 character)",
        "other": "is the wrong length (should be %{count} characters)"
      }
    },
    "not_found": {
      "explainer": "You're just taking the scenic route",
      "header": "You're not lost…"
    },
    "show": {
      "explainer": "This route is just blocked",
      "header": "You're not lost…"
    },
    "template": {
      "body": "There were problems with the following fields:",
      "header": {
        "one": "1 error prohibited this %{model} from being saved",
        "other": "%{count} errors prohibited this %{model} from being saved"
      }
    }
  },
  "helpers": {
    "application_helper": {
      "contacts": "%{number} subscribers",
      "country_button_select": "Select country",
      "emails": "& %{number} emails",
      "mailing_credit_count": "%{number} Mailing Credits",
      "other_amount": "Other Amount",
      "unlimited": "& unlimited emails"
    },
    "audience_imports_helper": {
      "completed": {
        "message": "Succeeded",
        "title": "This import was successful."
      },
      "failed": {
        "message": "Failed",
        "title": "This import failed."
      },
      "parsing_started_at": {
        "message": "Processing",
        "title": "This import is currently being processed."
      },
      "queued": {
        "message": "Queued",
        "title": "This import is queued and will be processed shortly."
      },
      "soft": {
        "message": "Exceeded plan",
        "title": "This import was over your subscriber limit. Please upgrade your account."
      },
      "undone": {
        "message": "Undone",
        "title": "This import was undone."
      }
    },
    "drip_campaigns_helper": {
      "stats": "Stats",
      "view_stats": "View stats"
    },
    "select": {
      "prompt": "Please select"
    },
    "signups_helper": {
      "add_a_field": "Add a field",
      "choose_field_type": "Choose a field type",
      "field_types": {
        "age_check": "Confirm age",
        "checkboxes": "Checkboxes",
        "date": "Date",
        "dropdown": "Dropdown",
        "radio_buttons": "Radio buttons",
        "text_field": "Text field",
        "tos_link": "Terms of Service",
        "tracking_option": "Tracking option"
      },
      "fields": {
        "address": "Address",
        "city": "City",
        "company": "Company",
        "country": "Country/Region",
        "email": "Email",
        "first_name": "First name",
        "last_name": "Last name",
        "name": "Name",
        "phone": "Phone",
        "state": "State",
        "title": "Title",
        "zip": "Zip"
      },
      "view_webform": "View this signup form"
    },
    "submit": {
      "create": "Create %{model}",
      "submit": "Save %{model}",
      "update": "Update %{model}"
    }
  },
  "js": {
    "ApiClient": {
      "errors": {
        "no_network": "There seem to be issues connecting to the server. Check your connection and make sure you're logged in."
      }
    },
    "CloneablePromotionsList": {
      "newer": "Newer",
      "older": "Older"
    },
    "MobileDashboard": {
      "AppNav": {
        "back": "Back"
      },
      "FromAddressField": {
        "label": "From"
      },
      "IndividualRecipientsField": {
        "label": "Email Addresses",
        "placeholder": "email@example.com"
      },
      "MailingsNewComponent": {
        "save_exit": "Save & Exit",
        "send": "Send",
        "title": "Send Campaign"
      },
      "MobileDashboardComponent": {
        "title": "Sent Campaigns"
      },
      "MobileDashboardSplash": {
        "alt_header": "GoDaddy Email Marketing Mobile Companion",
        "header1": "email marketing",
        "header2": "mobile companion",
        "tagline1": "create on the desktop",
        "tagline2": "monitor on the go"
      },
      "MobileDashboardStatsComponent": {
        "title": "Stats"
      },
      "NoPromotions": {
        "header1": "Nothing sent yet",
        "header2": "Use the desktop app to create and send your first campaign!"
      },
      "PromoDashItem": {
        "accepted": "Accepted",
        "edit": "Edit",
        "engaged": "Engaged",
        "scheduledAt": "Scheduled for:",
        "sent": "Sent",
        "sentAt": "Sent:",
        "stats": "Stats",
        "viewed": "Viewed"
      },
      "PromoHeader": {
        "send_again": "Send Again",
        "sent_at": "Sent at"
      },
      "SelectSubscriberListSlat": {
        "title": "Select Subscriber List"
      },
      "SendFinishedModal": {
        "error": {
          "button_text": "Go Back",
          "title": "We couldn't send your email..."
        },
        "success": {
          "button_text": "Got It",
          "description": "We're preparing your email for sending and will notify you when it's been sent.",
          "title": "Your email is on its way"
        }
      },
      "SocialLinksField": {
        "label": "Tap to add social sharing icons to your campaign:"
      },
      "StatsSwitcher": {
        "stats": {
          "accepted": "Accepted",
          "bounced": "Bounced",
          "engaged": "Engaged",
          "growth": "Growth",
          "sent": "Sent",
          "spam": "Spam",
          "viewed": "Viewed"
        }
      },
      "SubjectField": {
        "label": "Subject"
      },
      "SubscriberListExcluder": {
        "exclude_message": "Users on this list will not receive this email even if they are on a different list that is included."
      },
      "SubscriberListSelector": {
        "all_subscribers": "All Subscribers",
        "title": "My Subscriber Lists"
      },
      "SubscriberListToggleItem": {
        "exclude_content": "Exclude all users on this list",
        "excluded": "Excluded",
        "subscriber_count": "%{count} Subscribers"
      },
      "SubscriberListViewRow": {
        "subscriber_count": "%{count} Subscribers"
      },
      "SubscriberListsView": {
        "excluded": "Excluded Lists",
        "excluded_content": "Excluded Lists ensure the subscribers on those lists do not receive the sent mail, even if they are also on an included list.",
        "included": "Included Lists"
      },
      "ToDesktopLink": {
        "goToDesktop": "→ go to desktop"
      }
    },
    "Overview": {
      "Addons": {
        "active": "Active",
        "addons": "Add-Ons",
        "enable_addons": "Enable Add-Ons"
      },
      "CampaignsColumn": {
        "compose": "Compose",
        "helpCenter": "Visit the help center",
        "scheduleDemo": "Schedule a live demo",
        "title": "Campaigns"
      },
      "Card": {
        "errorOccured": "Error occured",
        "retry": "Retry"
      },
      "GetSignupCard": {
        "button_text": "Get your Signup Form",
        "description": "Get a head start on building your subscriber list by adding a signup form to your website, blog or Facebook page.",
        "link_title": "Get your Signup Form",
        "title": "Build your subscriber list"
      },
      "GetStartedCard": {
        "button_text": "Get started",
        "description": "Jump right in, our guidance and suggestions will make email marketing fun and easy. Send yourself a test email or post on Facebook.",
        "link_title": "Get started",
        "title": "Your first email campaign"
      },
      "ImportSubscribersCard": {
        "button_text": "Import subscribers",
        "description": "Already have a list of subscribers? Great! Upload them quickly and easily and you’re well on your way to sending!",
        "link_title": "Import your subscribers",
        "title": "Import your subscribers"
      },
      "LatestCampaignsCard": {
        "title": "Recently sent"
      },
      "LatestSignupsCard": {
        "title": "Newest signups"
      },
      "ScheduledCampaignsCard": {
        "title": "Scheduled campaigns"
      },
      "SendCampaignCard": {
        "button_text": "Send or share your latest campaign",
        "description": "You've created your email campaign, now it's time to show it off! Send your campaign to your list, share it on Facebook, or try just sending it to yourself as a test.",
        "link_title": "Send or share your latest campaign now",
        "title": "Send or share your latest campaign"
      },
      "SignupsChartCard": {
        "title": "New Signups"
      },
      "SubscribersColumn": {
        "title": "Subscribers"
      },
      "SubscribersGrowthCard": {
        "currentSubscribers": "Current Subscribers",
        "gained": "Signups in the last week"
      },
      "TutorialVideoCard": {
        "button_text": "Why Email Marketing",
        "description": "Watch a brief rundown of what Email Marketing is all about and learn the easiest way to get started.",
        "link_title": "Why Email Marketing",
        "title": "Email marketing 101"
      },
      "TutorialVideoModal": {
        "title": "Composing a campaign"
      },
      "ViewedAndEngagedCard": {
        "button_text": "Create another campaign",
        "engaged_subheading": "Engaged",
        "latest_update": "as of ",
        "link_title": "Create another campaign",
        "title": "Engagement in the last 30 days",
        "viewed_subheading": "Viewed"
      },
      "WhatsNewCard": {
        "check_it_out": "Check it out!",
        "description": "Welcome to the new overview page! Here you can view current campaigns, statistics, and subscriber count at a glance. You can also compose new campaigns, manage subscriber lists, and launch add-ons using the shortcuts.",
        "heading": "What's new",
        "help_article": "Help article:",
        "help_article_link_text": "Using the Overview Page",
        "punch_up_your_emails": "Now you can punch up your emails with inspiring images. Search our curated collection of gorgeous images and add them to your campaigns with just a click.",
        "thousands_of_images": "Thousands of images now at your fingertips",
        "title": "New Overview Page"
      },
      "title": "Overview"
    },
    "PaginatedList": {
      "load_more": "Load More"
    },
    "StockSearch": {
      "images_found": "Found %{count} images",
      "no_images_found": "No images found.",
      "try_something_else": "Try searching for a different term."
    },
    "address_normalization_dialog": {
      "address": "Address",
      "cancel": "Use my address",
      "choose": "Choose state...",
      "city": "City",
      "country": "Country/Region",
      "state": "State",
      "submit": "Accept suggestions",
      "suggested": "Suggested",
      "title": "We found a suggested match for your address...",
      "zipcode": "Zip"
    },
    "audience": {
      "import_history_dialog": {
        "import_history": "Import History"
      },
      "new_dashboard": {
        "bulk_select": {
          "one": "Select one person?",
          "other": "Select #{count} people?"
        },
        "findListName": {
          "all": "All Subscribers"
        },
        "humanizeKey": {
          "email": "Email",
          "name": "Name",
          "recipients": "Recipients",
          "secondSendSubject": "Second Send Subject",
          "subject": "Subject"
        }
      },
      "upload": {
        "initAndShow": "Add Subscriber",
        "initialize": "Upload subscribers",
        "onListSelected": {
          "add_contacts": "Add Subscribers",
          "suppression_list": "Suppress Subscribers"
        },
        "onMemberAdded": "Add Subscriber"
      }
    },
    "audience_list": {
      "list": {
        "search": {
          "more": "matches",
          "one": "match"
        }
      }
    },
    "audience_members": {
      "audience_upload_template": {
        "add_contact": "Add Contact"
      },
      "bulk_controls": {
        "all_list_selected": "All subscribers in the list selected",
        "all_search_selected": "All subscribers matching the search selected"
      },
      "edit": {
        "onbeforeunload": "There are unsaved changes!"
      },
      "index": {
        "all_contacts": "All contacts"
      }
    },
    "calendar": {
      "error": "Error. Please try again.",
      "scheduled": "Great, your campaign has been scheduled for %{time}."
    },
    "composer": {
      "banner": {
        "url_infotip": "Your banner is linked to %{url}. Click here to edit.",
        "url_infotip_empty": "Your banner does not have a link. Click here to add one."
      },
      "promotion": {
        "onbeforeunload": "There are unsaved changes!"
      },
      "promotion_module_markdown_editor": {
        "addCenter": "Centered text",
        "addHeading": "Heading",
        "addSubheading": "Subheading"
      },
      "saved": {
        "title": "Edit #{name}: GoDaddy Email Marketing"
      },
      "setup": {
        "presence": {
          "admin_editing": "Support is currently editing this campaign",
          "multiple_browsers": "You are editing this campaign in multiple browsers",
          "multiple_tabs": "You are editing this campaign in multiple tabs",
          "someone_editing": "Someone else is editing this campaign right now"
        }
      },
      "theme_create_dialog": {
        "dialog_body": {
          "based_on_current_style": "Based on the current style",
          "based_on_website": "Based on a website",
          "cancel": "Cancel",
          "create": "Create Style",
          "name": "Name:",
          "url": "Website address:"
        },
        "initialize": "Create a new style"
      },
      "theme_create_progress_dialog": {
        "initialize": "Grabbing colors..."
      }
    },
    "confirm_dialog": {
      "cancel": "Cancel",
      "ok": "OK"
    },
    "controllers": {
      "service_agreements_controller": {
        "errors": {
          "already_recieved_request": "Whoops. We've already received a request to make this plan change.",
          "cannot_reach_paypal": "PayPal cannot be reached. Please try again later.",
          "card_already_registered": "The credit card has already been registered. Please try another one.",
          "charge_recently_processed": "A charge with this amount was recently processed",
          "incorrect_details": "The credit card details are incorrect",
          "missing_credit_card": "There is no payment method",
          "missing_cvv": "The credit card verification number is missing"
        },
        "payment_successful": "Payment update has been successful"
      }
    },
    "dashboard": {
      "confirm_account_dialog": {
        "validateAgreeToTerms": "Please make sure you agree to the terms",
        "validateField": "Please enter your",
        "validateFirstName": "first name",
        "validateLastName": "last name",
        "validateOrganizationName": "company / group"
      },
      "promotion_item": {
        "handleSelfCloneSuccess": "Clone",
        "startSending": "Sending",
        "updateState": {
          "paused": "paused",
          "sending": "sending"
        }
      },
      "promotion_item_stats": {
        "chart_map": {
          "accepted": "Accepted",
          "bounced": "Bounced",
          "engaged": "Engaged",
          "marked_spam": "Marked Spam",
          "sent": "Sent",
          "shared": "Shared",
          "unsubscribed": "Unsubscribed",
          "viewed": "Viewed"
        },
        "onRefreshClick": "Refreshing Stats",
        "onRefreshStatsFailure": "Stats Totals",
        "onRefreshStatsSuccess": "Stats Totals",
        "refresh": {
          "sent": "Sent"
        }
      },
      "promotion_list": {
        "edit": "Edit",
        "ok": "OK",
        "untitled_group": "Untitled group"
      },
      "scheduled_mailings_dialog": {
        "button_text": {
          "all_accounts": "All Accounts",
          "child_account": "#{name}'s account",
          "my_account": "My Account"
        },
        "initConfirmation": {
          "body": "Are you sure you want to delete this schedule?",
          "title": "Delete schedule"
        },
        "search_placeholder": {
          "all_accounts": "Search parent and child mailings",
          "child_account": "Search #{name}'s mailings",
          "my_account": "Search my scheduled mailings"
        },
        "title": "Scheduled Mailings"
      }
    },
    "date_util": {
      "year_easter_egg": {
        "year_2014": "GoDaddy Email Marketing is Born",
        "year_2015": "The year of big dreams"
      }
    },
    "drip_campaigns": {
      "drip_item": {
        "send": {
          "disabled": "Disabled",
          "enabled": "Enabled",
          "first": {
            "send_after_delay": "Send %{delay} after a subscriber signs up.",
            "send_immediately": "Send immediately after a subscriber signs up."
          },
          "frequency": {
            "Day Interval": {
              "one": "1 day",
              "other": "%{count} days"
            },
            "Month Interval": {
              "one": "1 month",
              "other": "%{count} months"
            },
            "Week Interval": {
              "one": "1 week",
              "other": "%{count} weeks"
            }
          },
          "not_first": {
            "send_after_delay": "Send %{delay} after a subscriber receives the previous autoresponder."
          }
        }
      }
    },
    "drips": {
      "dashboard": {
        "onStartCampaignSuccess": {
          "pause": "Pause",
          "running": "Running"
        },
        "onStopCampaignSuccess": {
          "paused": "Paused",
          "run": "Start"
        },
        "publishing": {
          "busy": "Publishing...",
          "notBusy": "Publish"
        },
        "startCampaign": "Starting...",
        "stopCampaign": {
          "pausing": "Pausing..."
        }
      },
      "details_dialog": {
        "day": {
          "one": "A day after a subscriber receives the previous mailing.",
          "other": "%{count} days after a subscriber receives the previous mailing."
        },
        "month": {
          "one": "A month after a subscriber receives the previous mailing.",
          "other": "%{count} months after a subscriber receives the previous mailing."
        },
        "week": {
          "one": "A week after a subscriber receives the previous mailing.",
          "other": "%{count} weeks after a subscriber receives the previous mailing."
        }
      },
      "edit": {
        "clone": "Cloning...",
        "onCloneFailure": "Clone",
        "onCloneSuccess": "Clone",
        "onSaveFailure": "Save Details",
        "onSaveSuccess": {
          "pause": "Pause",
          "save": "Save Details",
          "start": "Start"
        },
        "save": "Saving Details...",
        "updateDripPositions": "Send immediately after a subscriber signs up."
      },
      "setup": {
        "days": "Days",
        "months": "Months",
        "weeks": "Weeks"
      }
    },
    "eos": {
      "checkUserEmail": "Oops! Looks like a bad email.",
      "data": {
        "email": {
          "busy": "Checking...",
          "placeholder": "Please enter your email address",
          "proceed": "Next"
        },
        "password": {
          "busy": "Creating account",
          "placeholder": "Please enter a password",
          "proceed": "Signup"
        }
      },
      "formSubmit": {
        "error": "Something went wrong. Try clicking %{link: here}."
      }
    },
    "getting_started": {
      "show": {
        "section1": {
          "click_to_upload": "Click to add%{br}your logo",
          "drop_logo": "Drop your%{br}logo here"
        }
      },
      "step1": {
        "drop_area_error_message": "Oops: try another file",
        "drop_image": "Drop your logo right here!",
        "file_type_error_message": "Try again! Make sure your file is a PNG or JPG and under 1MB then drop again!",
        "let_go": "Let go!",
        "upload_complete": "Upload complete",
        "uploading": "Uploading"
      },
      "step2": {
        "onSubmitFail": "There was an issue. Please try again."
      },
      "step3": {
        "enter_email": "Please enter an email address",
        "valid_email": "Must be a valid email"
      },
      "step4": {
        "first_promotion": "Your first campaign!"
      }
    },
    "mailing_credits": {
      "purchase": {
        "calculate_price": "Calculate price"
      },
      "purchase_wizard": {
        "setPurchasedContent": "All done!"
      }
    },
    "mailing_stats": {
      "application": {
        "no_data": "No data"
      }
    },
    "mailings": {
      "filter_dialog": {
        "filter_list": "Filter your %{name} list"
      },
      "mailing": {
        "onSendFailure": "Please try again later.",
        "setIncludedLists": "All subscribers",
        "setSummaryTo": {
          "audience_member": "subscriber",
          "audience_members": "subscribers",
          "second_send": "Anyone who did not view the previous mailing"
        },
        "validateAddress": "can't be blank",
        "validateExtraRecipients": "must contain at least one valid email",
        "validateExtraRecipientsLimit": "is over allowed limit (#{limit})",
        "validateFromEmail": {
          "isBlank": "can't be blank",
          "isInvalid": "must be a valid email address"
        },
        "validateFromName": "can't be blank",
        "validateOrganizationName": {
          "isBlank": "can't be blank",
          "isGoDaddy": "can't be GoDaddy"
        },
        "validateRecipients": "can't be empty",
        "validateSchedule": {
          "isBlank": "can't be blank",
          "isInPast": "can't be in the past"
        },
        "validateSecondSendSubject": {
          "isBlank": "can't be blank",
          "isNotUnique": "can't be similar to the original subject line"
        },
        "validateSubject": "can't be blank"
      },
      "new_dashboard": {
        "initData": {
          "disabled": "Saving...",
          "enabled": "Save"
        },
        "initDialogs": {
          "creditCaption": "You've gone over your free plan sending limit. Upgrade to send unlimited emails each month!"
        },
        "onCalendarInvalid": "Continue",
        "onCalendarValid": "Continue",
        "onMailingCancelCompleted": "Saving...",
        "onMailingCancelStarted": "Canceling...",
        "onMailingScheduleCompleted": "Saving...",
        "onMailingScheduleStarted": "Scheduling...",
        "onMailingSendCompleted": "Saving...",
        "onMailingSendStarted": "Sending...",
        "onMailingSendSuccess": "Sending",
        "onScheduleContinue": "Checking date..."
      },
      "new_sender": {
        "continue": "Continue",
        "submit": "Submit"
      },
      "send_dialog": {
        "checkForSuppressed": "#{number} active (#{suppressed_number} suppressed)",
        "disabled": "Disabled",
        "enabled": "Enabled",
        "onPerformHardCountFailure": "some",
        "second_send": "Recipients who don't open this campaign will get it again after 72 hours with a new subject line, \"{{subject}}\".",
        "setSendBtnText": {
          "schedule": "Looks Good. Schedule it!",
          "send": "Looks Good. Send it!"
        },
        "upgradeNotice": "This would leave you with {{remaining_credits}} mailing credits. Upgrade now so you don't run out.<br> Call {{phone_number}}, or <span>click here to upgrade.</span>",
        "vnextUpgradeNotice": "This would leave you with {{remaining_credits}} mailing credits. Upgrade now so you don't run out: call {{phone_number}}."
      },
      "senderVerificationDialog": {
        "confirmationBody": "Your campaign is now on its way.",
        "confirmationHeader": "Success! Your email is confirmed"
      }
    },
    "models": {
      "promotion": {
        "default_name": "Untitled Campaign"
      }
    },
    "participants": {
      "addPermissionsSubmitHandler": "Permissions successfully updated!"
    },
    "password": {
      "capitalLetter": "Try an uppercase letter",
      "lowerLetter": "Try a lowercase letter",
      "noCommonWords": "Don't use common passwords",
      "noRepeats": "Don't repeat characters",
      "number": "Try adding a number",
      "symbol": "Try adding a symbol",
      "tooShort": "Your password is too short",
      "victory": "Excellent!"
    },
    "payment_form": {
      "confirm_dialog": {
        "contentCredit": "Submitting the new payment details will remove your Credit Card details",
        "contentPaypal": "Submitting the new payment details will remove your PayPal details",
        "title": "Change payment method?"
      }
    },
    "plans": {
      "changePaymentConfirmButtonText": {
        "downgrade": "Looks Good, Downgrade my Plan",
        "pay": "Looks Good, Checkout"
      },
      "change_plan": {
        "updateCreditsText": "unlimited"
      },
      "updateTheWizard": "contacts"
    },
    "promotion": {
      "edit_text": {
        "onSaveComplete": "Save",
        "save": "Saving..."
      },
      "import_url_dialog": {
        "showError": "Oops! Something went wrong while fetching that url. Please try again or contact support."
      },
      "import_zip_dialog": {
        "onUploadFailure": "Oops! Something went wrong while processing that archive: "
      },
      "s3_upload": {
        "notifyUserCreatePtAndDeleteImage": "There was a problem uploading #{filename}. Please try again or contact support.",
        "uploadFile": "#{filename} is not an image. Please try again with an image file such as a JPG, PNG, or GIF."
      },
      "send_test": {
        "onSubmit": {
          "invalid_email": "Invalid Email",
          "send": "Send",
          "sending": "Sending..."
        }
      }
    },
    "promotion_stats": {
      "finished_sending": "%{campaign_name} has finished sending on %{time}",
      "sent": "%Sent %{time}"
    },
    "promotions": {
      "child_clone": {
        "clone": "Clone"
      },
      "promotion_module": {
        "blog_post": "Blog post",
        "button_text": "Click to configure",
        "lock": "Lock",
        "nuf_button_text": "This is your primary call to action",
        "unlock": "Unlock"
      },
      "search": {
        "placeholder": "Search campaigns"
      }
    },
    "react_test": {
      "say_hello": "Say hello to"
    },
    "rss_feeds": {
      "dashboard": {
        "onImportFeed": "Importing feed..."
      },
      "resume_dialog": {
        "right_now": "Right now"
      },
      "schedule_dialog": {
        "customize": "Customize",
        "disabled": "Disabled",
        "enabled": "Enabled",
        "finishSuccessfully": "Your RSS campaign was scheduled.",
        "hide_options": "Hide options",
        "human_delay": {
          "x_days": "%{count} day interval",
          "x_hours": "%{count} hour interval",
          "x_months": "%{count} month interval",
          "x_weeks": "%{count} week interval"
        },
        "initAudienceSelection": "Add a list...",
        "onAudienceListItemAdded": "Add a list...",
        "people_count": "#{count} people",
        "removeTitle": "Remove this list from the schedule"
      },
      "send_results": {
        "forced": "Rss mailing was force sent.",
        "general_error": "Ooops, something went wrong with this send.",
        "last_send": "Last send: ",
        "mailing_credits_skip": "Uh oh! This RSS mailing has been skipped because its user has insufficient mailing credits.",
        "mailing_credits_unschedule": "Uh oh! This RSS mailing has been unscheduled because its user has insufficient mailing credits.",
        "needs_approval": "This RSS mailing has been skipped because it needs approval.",
        "no_new_entries": "No new entries found, there is nothing to send.",
        "payfail_susended_canceled": "This mailing has been skipped because the user is in payment failure, suspended, cancelled, or non-existent. Please contact support for more information.",
        "sent": "This rss mailing was successfully sent.",
        "unauthorized_hidden_frequency": "This RSS mailing has been skipped because the mailing is hidden, has not been correctly set up, or has not been authorized.",
        "unsent": "This RSS mailing has not yet been sent."
      }
    },
    "service_agreements": {
      "change_plan": {
        "discounted": "discounted",
        "payment_confirmation_summary": "You have chosen the #{plan_name} with #{max_contacts} contacts.",
        "payment_submit_btn_text": "Pay #{currency}#{amount}",
        "payment_submit_summary": "You have chosen the #{plan_name} with #{max_contacts} contacts.",
        "payment_success_summary": "You have changed to the #{plan_name} with #{max_contacts} contacts."
      },
      "payment_submit": {
        "button": "Submitting payment…"
      }
    },
    "signups": {
      "activation_message_dialog": {
        "header": "Custom Activation Message",
        "toggleButtons": {
          "save": "Save Custom Message",
          "saving": "Saving Changes..."
        }
      },
      "base": {
        "changesSaved": "Changes Saved",
        "saveChanges": "Save Changes",
        "savingChanges": "Saving Changes..."
      },
      "custom_field_dialog": {
        "fieldTypeDropdownForCreate": "Choose field type:",
        "fieldTypeDropdownForEdit": "Change field type:",
        "text_field": "Text field"
      },
      "dashboard": {
        "initialize": "Anyone who you share this URL with will be able to view this signup form and signup to your newsletter."
      },
      "default_signup": {
        "initConfirmSetDialog": {
          "change": "Change Default Signup Form?",
          "set": "Set Default Signup Form?"
        },
        "initTemplates": "Are you sure you want to set <em>#{signupName}</em> as your new default signup form?"
      },
      "embed_dialog": {
        "title": "Embed"
      }
    },
    "social_links": {
      "onBeforeUnload": {
        "end": "Click OK to abandon the changes or Cancel to go back and save.",
        "start": "You've made changes to your Social Links."
      },
      "onSubmit": "Saving Changes...",
      "onSubmitFailure": "Save Changes",
      "onSubmitSuccess": "Save Changes"
    },
    "stats": {
      "compare_stats": {
        "confirm_delete_dialog": {
          "info": "Are you sure you want to permanently delete these stats?",
          "title": "Delete stats?"
        },
        "share_dialog": {
          "info": "Anyone who you share this URL with will be able to view this chart but will not have access to your list. You may disable this share in your add-ons area.",
          "title": "Share these statistics"
        }
      }
    },
    "triggers": {
      "delete_confirm_message": "Are you sure you want to delete this trigger?",
      "disabled": "Disabled",
      "enabled": "Enabled"
    },
    "widgets": {
      "mimi_voice": {
        "close": "Close this alert"
      }
    }
  },
  "js_url_overrides": {
    "suppression_reason_helpdoc": "https://www.godaddy.com/help/suppression-reason-explained-by-me-16545"
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%u%n",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "$"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": ".",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Billion",
          "million": "Million",
          "quadrillion": "Quadrillion",
          "thousand": "Thousand",
          "trillion": "Trillion",
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 3,
        "significant": true,
        "strip_insignificant_zeros": true
      },
      "storage_units": {
        "format": "%n %u",
        "units": {
          "byte": {
            "one": "Byte",
            "other": "Bytes"
          },
          "gb": "GB",
          "kb": "KB",
          "mb": "MB",
          "tb": "TB"
        }
      }
    },
    "percentage": {
      "format": {
        "delimiter": "",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    }
  },
  "personalization_tags": {
    "custom_fields_dialog": {
      "cancel": "Cancel",
      "enter_fallback": "Enter a fallback",
      "save": "Save",
      "title": "Custom Fields"
    },
    "index": {
      "address": "Address",
      "button_add": "Add a personalization tag",
      "cancel": "Cancel",
      "city": "City",
      "company": "Company",
      "country": "Country/Region",
      "custom_fields": "Custom Fields",
      "email": "Email",
      "first_name": "First name",
      "last_name": "Last name",
      "name": "Name",
      "phone": "Phone",
      "save_changes": "Save changes",
      "state": "State",
      "title": "Title",
      "zip": "Zip"
    },
    "personalization_tags_welcome": {
      "back_to_addons": "Back to Add-ons",
      "explainer": "Make your email stand out and add a personal touch with personalization.\n\nChoose some personalization fields, and you'll see the personalization show up automatically the next time you create a new campaign!\n",
      "header": "Personalization",
      "hi": "Hi",
      "welcome": "Welcome to your personalization area!"
    },
    "tag_field": {
      "delete": "Delete",
      "delete_tag": "Delete the %{tag_name} tag",
      "edit": "Edit",
      "edit_fallback": "Edit the fallback for %{tag_name}",
      "enter_a_fallback": "Enter a fallback",
      "fallback": "Fallback:",
      "fallback_recommend": "We recommend adding a fallback to avoid blank personalization tags.",
      "fallback_with_text": "Fallback: %{fallback_text}",
      "no_fallback": "No Fallback",
      "save": "Save"
    }
  },
  "stats": {
    "archived": {
      "view_individual": "Detailed stats for this campaign have been archived. <br /> Please view individual mailings:"
    },
    "attempts": {
      "add_to": "Add to",
      "export": "Export",
      "syncing": "Syncing"
    },
    "deleted": {
      "mailing": "In compliance with our retention policies, specific details on recipient actions are deleted after one year. Detailed stats on this mailing are no longer available.",
      "view_individual": "Stats for this campaign have been deleted. <br /> Please view individual mailings:"
    },
    "empty": {
      "account_on_hold": "Your account is currently on hold. Please contact GoDaddy Email Marketing support at https://support.godaddy.com to get the hold lifted.",
      "all_members": "This campaign was intended to be sent to all your subscribers.",
      "back": "Back",
      "back_to_dashboard": "Back to Campaigns",
      "back_to_drip_campaign": "Back to autoresponder",
      "dont_send_selected": "The <i>Don't send this to people who already received it</i> option was selected.",
      "from": "from",
      "latest": "Latest",
      "lists_excluded": "The %{list} list(s) were excluded.",
      "lists_selected": "This campaign had the %{list} subscriber list(s) selected.",
      "no_emails_sent": "This mailing has been delivered but no emails were sent.",
      "no_lists_selected": "No subscriber lists were selected for this campaign.",
      "others_sent": "Others Sent",
      "over_max_contacts": {
        "line_1": {
          "one": "Per your current plan, you can email %{max_contacts} unique recipients every month. You've been using your plan to the max, which is great! Unfortunately, this mailing pushes you <strong>over the max by %{count} contact</strong>, which is why we can't send it out.",
          "other": "Per your current plan, you can email %{max_contacts} unique recipients every month. You've been using your plan to the max, which is great! Unfortunately, this mailing pushes you <strong>over the max by %{count} contacts</strong>, which is why we can't send it out."
        },
        "line_2": "To fix this, you can either wait for your next billing cycle (%{next_payment_date}), or %{link: upgrade your plan now}.",
        "line_3": "You can also %{link: view all sends} for this campaign.",
        "title": "Heads up: We couldn't send this campaign",
        "upgrade_plan": "Upgrade plan"
      },
      "send_again": "Send it again!",
      "sent": "Sent",
      "statistics": "Statistics",
      "with_subj": "With subject:"
    },
    "empty_click_performance": {
      "header": "If you're wondering where the Click Performance is...",
      "not_available": "Unfortunately click performance metrics are not available for autoresponders and transactional campaigns.",
      "overview": "Right now, you're looking at an overview of this campaign's stats. To see your click performance metrics, you'll need to select a specific mailing:",
      "plain_text": "Sorry, click performance metrics are not available for plain text campaigns."
    },
    "header": {
      "all_sent": "All mailings sent,",
      "from": "from",
      "in_progress": "Sent to %{sent_count} of %{total_recipient_count}",
      "last_x_mailings": "Last %{x} sends,",
      "lists": "to %{link: %{number} lists.}",
      "no_lists": " to 0 lists.",
      "one_list": "to %{link: 1 list.}",
      "scheduled_at": "Scheduled at",
      "sent": "Sent",
      "started": "Started",
      "statistics": "Statistics",
      "with_subj": "With subject:"
    },
    "index": {
      "back": "Back",
      "cancel": "Cancel",
      "cancel_delivery": "Cancel delivery of this campaign",
      "edit": "Edit",
      "edit_promotion": "Edit your campaign",
      "go_back": "Go back",
      "pause_delivery": "Pause delivery",
      "see_all_sends": "See All Sends",
      "share": "Share",
      "share_stats": "Share these stats",
      "statistics": "Statistics",
      "unpause_delivery": "Unpause delivery",
      "view_as_percentages": "View stats as percentages"
    },
    "legend": {
      "accepted": "Accepted",
      "audience": "Sent to",
      "bounced": "Bounced",
      "clicked": "Clicked",
      "display_name": "Name",
      "engaged": "Engaged",
      "excluded_audience": "Excluded",
      "facebooked": "Facebook",
      "forward_total_clicked": "Clicks from Forward",
      "forward_total_viewed": "Views from Forward",
      "forwarded": "Forwarded",
      "ga": "Conversions",
      "growth": "Growth",
      "hard_bounced": "Hard Bounces",
      "id": "Id",
      "linked_in": "LinkedIn",
      "mailing_date": "Date Sent",
      "mimio_link": "View on Web URL",
      "opt_out": "Unsubscribed",
      "other_bounced": "Other Bounces",
      "pinned": "Pinterest",
      "plusoned": "Google+",
      "promotion_id": "Campaign Id",
      "promotion_name": "Campaign Name",
      "sent": "Sent",
      "shared": "Shared",
      "soft_bounced": "Soft Bounces",
      "spam": "Marked as Spam",
      "subject": "Subject",
      "subscribed": "Subscribed",
      "total": "Total",
      "total_clicked": "Total Clicked",
      "total_viewed": "Total Viewed",
      "tweeted": "Tweeted",
      "unopened": "Untraced",
      "user_email": "Account Email",
      "user_name": "Account Name",
      "viewed": "Viewed"
    },
    "lists_dialog": {
      "audience_lists": "Subscriber lists",
      "ok": "Close"
    },
    "nav": {
      "click_perf": "Click performance",
      "overview": "Overview",
      "total": "Total"
    },
    "stats_accepted": {
      "accepted": "Accepted",
      "ask": "Questions? Ask an expert.",
      "bounced": "Bounced",
      "explainer_1": "Accepted is the number of recipients that your email successfully reached. Understanding this stat can help you grow:",
      "header": "Learn more about the Accepted stat",
      "sent": "Sent"
    },
    "stats_bounced": {
      "explainer_1": "When an email can't be delivered, it's call a bounce. Whether it's a typo in the address or a full mailbox, it's good to keep this statistic low:",
      "general": "General Bounces",
      "hard": "Hard Bounces",
      "header": "Learn more about Bounces",
      "soft": "Soft Bounces",
      "total": "Total Bounces"
    },
    "stats_engaged": {
      "explainer_1": "When a recipient clicks on a link or shares your newsletter on a social network, we call them engaged. Learn more:",
      "forwards": "Forwards",
      "header": "Learn more about Engaged",
      "note": "Note: On pages where we show you all your stats combined, like this page, link filters don't apply.",
      "shared": "Shared",
      "total_clicks": "Total Clicks",
      "unique_clicks": "Unique Clicks"
    },
    "stats_forwarded": {
      "clicks": "Clicks from Forwards",
      "explainer_1": "Every newsletter includes a Forward To A Friend link to make it easy for your readers to share your email. Learn more:",
      "forwards": "Forwards",
      "header": "Learn more about Forwards",
      "views": "Views from Forwards"
    },
    "stats_ga": {
      "explainer_1": "We are hard at work building a more detailed view of your 'converted' value. In the meantime, here are some links that might be of use to you:",
      "header": "Nothing to see here just yet!"
    },
    "stats_spam": {
      "explainer_1": "Getting marked as spam is a stat you want to keep low. When a reader clicks the \"spam\" button, ISPs like Gmail take notice. Keep your delivery great by keeping this stat low.",
      "header": "Learn more about Spam",
      "spam": "Spam"
    },
    "stats_subscribed": {
      "explainer_1": "Did you know you can gain subscribers when you send? GoDaddy Email Marketing can include a subscribe link in your email so when your readers share, new people can subscribe!",
      "header": "Learn how to gain more subscribers",
      "subscribed": "Subscribed",
      "unsubscribed": "Unsubscribed"
    },
    "stats_tabs": {
      "accepted": "Accepted",
      "bounced": "Bounced",
      "converted": "Converted",
      "engaged": "Engaged",
      "forwarded": "Forwarded",
      "growth": "Growth",
      "marked_as_spam": "Marked as Spam",
      "viewed": "Viewed"
    },
    "stats_viewed": {
      "explainer_1": "The Viewed stat refers to all the recipients that opened your email. Learn how we know when a reader views your newsletter:",
      "header": "Learn more about Viewed",
      "total_views": "Total Views",
      "unique_views": "Unique Views"
    }
  },
  "support": {
    "array": {
      "last_word_connector": ", and ",
      "two_words_connector": " and ",
      "words_connector": ", "
    },
    "phone": "Phone",
    "phone_number": "+1 480-463-8836",
    "phone_tel": "+14804638836"
  },
  "time": {
    "am": "am",
    "formats": {
      "dd_mm_yyyy_slashes": "%d/%m/%Y",
      "default": "%A, %B %e %Y @ %l:%M%p",
      "long": "%B %d, %Y %I:%M %p",
      "mm_dd_yyyy_slashes": "%m/%d/%Y",
      "mmm_dd_comma_yyyy": "%B %-d, %Y",
      "month_select_collection": "%m - %b",
      "short": "%d %b %I:%M %p"
    },
    "pm": "pm"
  }
});
